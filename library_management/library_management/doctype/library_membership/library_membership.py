# Copyright (c) 2025, JD and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.docstatus import DocStatus



class LibraryMembership(Document):
    # Check before submitting..
    def before_submit(self):
        exists = frappe.db.exists(
            "Library Membership",
            {
                "library_member": self.library_member,  # jis member ka data hum submit kar rahe
                "docstatus": DocStatus.submitted(),    # pehle se submit hua ho
                # check if the membership's end date is later than this membership's start date
                "to_date": (">", self.from_date),      # pehle wali membership ka end date > nayi wali start date
            },
        )
        if exists:
            frappe.throw("There is an active membership for this member")
        
        
        loan_period = frappe.db.get_single_value("Library Setting", "loan_period")
        self.to_date = frappe.utils.add_days(self.from_date, loan_period or 30)