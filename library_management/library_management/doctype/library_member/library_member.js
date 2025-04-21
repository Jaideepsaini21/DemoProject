// Copyright (c) 2025, JD and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library Member", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on("Library Member", {
    refresh: function (frm) {
      frm.add_custom_button("Create Membership", () => {
        frappe.new_doc("Library Membership", {
          library_member: frm.doc.name,
        });
      });
      frm.add_custom_button("Create Transaction", () => {
        frappe.new_doc("Library Transaction", {
          library_member: frm.doc.name,
        });
      });
    // },
    // validate:function(frm){
    //     frm.set_value('full_name',frm.doc.first_name +" " + frm.doc.last_name)
    // },
    // test_fun(frm){
    //     frappe.msgprint(__('this is mssage'))
        
    }
    //   enable:function(frm){
    //       let row = frm.add_child('date_and_values_section',{
    //         date:"01:02:2021",
    //         value_1:10,
    //         value_2:20,
    //       })
    // }
  });
   




//   frappe.ui.form.on('Library Member', {
//     refresh: function(frm) {
//         if (frm.is_new()) {
//             let d = new frappe.ui.Dialog({
//                 title: 'Enter the Parent Details',
//                 fields: [
//                     {
//                         label: 'First Name',
//                         fieldname: 'first_name',
//                         fieldtype: 'Data'
//                     },
//                     {
//                         label: 'Last Name',
//                         fieldname: 'last_name',
//                         fieldtype: 'Data'
//                     },
//                     // {
//                     //     label: 'Email Address',
//                     //     fieldname: 'email_address',
//                     //     fieldtype: 'Data'
//                     // }
//                 ],
//                 primary_action_label: 'Submit',
//                 primary_action(values) {
//                     frm.set_value('first_name', values.first_name);
//                     frm.set_value('last_name', values.last_name);
//                     // frm.set_value('Email Address', values.email_address);
//                     d.hide();
//                 }
//             });
//             d.show();
//         }
//     }
// });
