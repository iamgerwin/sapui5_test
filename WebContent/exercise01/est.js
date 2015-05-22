onCreateButtonPress : function(oEvent){
              var that = this;
              var checkBoxState = sap.ui.getCore().getModel("empVerificationModel").getProperty("/checkBoxState");
              
              // Reset all model bindings to its default values if the Request ID is 
              // not populated
              if(this.Requestid === "" ){
                     if(checkBoxState === true) {
                    	 	createDialog(that,0,0);             
                     }
              }
              // Handle the opening and closing of the popover for create new request
              else if (this.byId("idIconTabBar").getSelectedKey() === UI5Global.TAB_KEY.CONFIRMATION)
                     {
                     this.onConfirmCreateNewRequest();
                     }
              else{
                     if(!this.verifyNewPopOver) {
                           this.verifyNewPopOver = sap.ui.xmlfragment("view.verifyNewPopOver", this);
                           this.getView().addDependent(this.verifyNewPopOver);
                  }
                     
                     if(this.verifyNewPopOver.isOpen() === true){
                           this.verifyNewPopOver.close();
                     }
                     else {
                           this.verifyNewPopOver.open();
                     }             
              }
       },
       
       /**
       * Resets the JSON model binding to its default values.
       * @param oEvent
       */
       onConfirmCreateNewRequest : function(oEvent){
              	var that = this;

            	  createDialog(that,"empVerificationModel","/selectedIconTab");
       },
       
       /**
        * createDialog Function
        * @param that = this mandatory
        * @model set 0 if null
        * @property set 0 if null
        */
       
       createDialog : function(that,model,property) {
    	   	
    	    zeroDefault(model);
    	   	zeroDefault(property);
    	   	
    	   	busyDialog.open();
    	   	defaultTimeout = 10;
    	   	
    	   	setTimeout(function(that){
				if(model !== 0 && property !== 0) {   				
					sap.ui.getCore().getModel(model).setProperty(property, UI5Global.OVERVIEW);
				    that.verifyNewPopOver.close();      
				}
					
			that.resetToDefaultValues();	
			busyDialog.close();
			}, defaultTimeout);  

	   },
	   
	   zeroDefault : function (value) {
		   value = typeof value !== 'undefined' ? value : 0;
		   return value;
	   }