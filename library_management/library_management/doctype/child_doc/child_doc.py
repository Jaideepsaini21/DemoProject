# Copyright (c) 2025, JD and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ChildDoc(Document):
    pass
    # Uncomment if needed
    # frappe.db.set_value(doctype, name, fieldname)

    # def validate(self):
    #     self.get_value()

    # def get_value(self):
    #     first_name, last_name = frappe.db.get_value(  'Parent Doc', 'Anu', ['first_name', 'last_name'])
    #     frappe.msgprint(
    #         ("The Parent First Name is {0} and Last Name is {1}").format(first_name, last_name)
    #     )
    
#######################################################
# Example usage of set_value (commented out):

# def validate(self):
#     self.set_value()

# def set_value(self):
#     frappe.db.set_value('Parent Doc', 'Anu', 'last_name', 'Jain')
#     first_name, last_name = frappe.db.get_value('Parent Doc', 'Anu', ['first_name', 'last_name'])
#     frappe.msgprint(
#         _("The Parent First Name is {0} and Last Name is {1}").format(first_name, last_name)
#     )


# class ChildDoc(Document):
    # pass

	# frappe.new_doc(doctype)
    # def validate(self):
    #     self.new_document()
        
	# def new_document(self):
    #     doc = frappe.new_doc('parent_doc')
    #     doc.first_name = 'seema'
    #     doc.last_name = 'saini'
    #     doc.age = 20
    #     doc.save()
    


    # frappe.delete_doc(doctype,name)
	# 	def validate(self):
    #        frappe.delete_doc('parent_doc','neel')
    


	##sql..
    # data = frappe.db.sql("SELECT first_name FROM tabEmployee WHERE status = %s", ('Active',), as_dict=True)
