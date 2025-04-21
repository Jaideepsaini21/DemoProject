// Copyright (c) 2025, JD and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library Transaction", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on("Library Transaction", {
	// refresh(frm) {
    // before_save:function(frm){
    //     frappe.throw("hello before save in data")
    // }

    // after_save:function(frm){
    //     frappe.throw("hello from after_save in data")
    // }
    // enble_save:function(frm){
    //     frappe.throw("hello from enble_save in data")
    // }
	// },
    refresh:function(frm){
        frm.is_new("kkkk")
        frm.set_intro("hello from enble_save in data")
    }
});