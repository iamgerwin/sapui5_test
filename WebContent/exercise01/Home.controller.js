sap.ui.controller("exercise01.Home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf exercise01.Home
*/
	onInit: function() {
		var oEmployeeDetailsModel = new sap.ui.model.json.JSONModel({
			"name": "Gerwin",
			"company" : "Accenture"
		});
		
		sap.ui.getCore().setModel(oEmployeeDetailsModel,"employeeModel");
	},
	
	updateJSONData: function() {
		var data = {
			"lastName" : "De las Alas",
			"contact" : "091231"
		};
		
		var JSONModel = sap.ui.getCore().getModel("employeeModel");
		JSONModel.setData(data, true);
	},
	
	displayAlert: function() {
		var msg = sap.ui.getCore().getModel("employeeModel");
		
		alert(msg.getProperty("/contact"));
		alert(msg.getProperty("/lastName"));
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf exercise01.Home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf exercise01.Home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf exercise01.Home
*/
//	onExit: function() {
//
//	}

});