if ('ontouchstart' in document.documentElement) document.write("<script src='/assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>");

var businesscall = {

    UserSignup: function () {

		var firstnameInput = $('#txtfname');
        var middlename1Input = $('#txtmiddle1');
        var middlename2Input = $('#txtmiddle2');
        var lastnameInput = $('#txtlname');
        var telephoneInput = $('#txttelephone');
        var icardInput = $('#txticard');
        var usernameInput = $('#txtusername');
        var paswordInput = $('#txtpassword');
        var question_idInput = $('#ddlquestions');
        var answerInput = $('#txtanswer');

        var firstname = firstnameInput.val();
        var middlename1 = middlename1Input.val();
        var middlename2 = middlename2Input.val();
        var lastname = lastnameInput.val();
        var telephone = telephoneInput.val();
        var icard = icardInput.val();
        var username = usernameInput.val();
        var pasword = paswordInput.val();
        var question_id = question_idInput.val();
        var answer = answerInput.val();
		
		var errorCount = 0;
		jQuery('#userRegistrationForm .errorText').remove();

		jQuery('#userRegistrationForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'txtusername' && !businesscall.ValidateEmail(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Please enter valid username/email!</small>');
					errorCount++;
				}
				else if(id == 'txtpassword' && !businesscall.ValidatePassword(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Password must have minimum at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!</small>');
					errorCount++;
				}
		})

        /*if (firstname.length <= 0 || middlename1.length <= 0 || middlename2.length <= 0 || lastname.length <= 0 || telephone.length <= 0 || icard.length <= 0 || username.length <= 0 || pasword.length <= 0 || question_id <= 0 || answer.length <= 0)
		{
            businesscall.WarningCustommessage('Validation:', 'Please enter all required values!');
            return;
        }

        if (!businesscall.ValidateEmail(username)) {
            businesscall.WarningCustommessage('Validation:', 'Please enter valid username/email!');
            return;
        }

        if (!businesscall.ValidatePassword(pasword)) {
            businesscall.WarningCustommessage('Validation:', 'Password must have minimum at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
            return;
        }*/
		
		if(errorCount == 0)
		{
			var userinfo = { firstname: firstname, middlename1: middlename1, middlename2: middlename2, lastname: lastname, telephone: telephone, icard: icard, username: username, pasword: pasword, question_id: question_id, answer: answer };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/security/adduser",
				data: JSON.stringify(userinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
	
					if (data == "Exist") {
	
						businesscall.InValidCustommessage('Fail:', 'User already exist for same username </br> Either login or change the username!');
	
					} else if (data == "Success") {
	
						businesscall.ValidCustommessage('Success:', 'You are successfully registered. please login!');
	
						$('.back-to-login-link').click();
						$('#btnreset').click();
	
					} else if (data == "Fails") {
	
						businesscall.InValidCustommessage('Fail:', 'User registration fails. please try again later!');
	
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'User registration fails. please try again later!');
				}
			});
		}
    },
    UserEdit: function () {

        var firstname = $('#txtfname').val();
        var middlename1 = $('#txtmiddle1').val();
        var middlename2 = $('#txtmiddle2').val();
        var lastname = $('#txtlname').val();
        var telephone = $('#txttelephone').val();
        var userid = $('#hdnuserId').val();
		
		var errorCount = 0;
		jQuery('#editProfile .errorText').remove();

		jQuery('#editProfile').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
		})

       /* if (firstname.length <= 0 || middlename1.length <= 0 || middlename2.length <= 0 || lastname.length <= 0 || telephone.length <= 0 || icard.length <= 0 ) {
            businesscall.WarningCustommessage('Validation:', 'Please enter all required values!');
            return;
        }*/
		
		if(errorCount == 0)
		{
			var userinfo = { firstname: firstname, middlename1: middlename1, middlename2: middlename2, lastname: lastname, telephone: telephone, userid: userid };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/security/edituser",
				data: JSON.stringify(userinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'please try again!');
					}
					else if (data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Profile upadated successfully.');
						$('.btnclose').click();
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
    },
    UserSignIn: function () {
		
		var usernameInput = $('#txtcusername');
		var passwordInput = $('#txtcpassword');
		
        var username = usernameInput.val();
        var pasword = passwordInput.val();

		jQuery('.errorText').remove();
		usernameInput.parent('span').removeClass('has-error');
		passwordInput.parent('span').removeClass('has-error');
		var errorCount = 0;

        if (username.length <= 0 || pasword.length <= 0)
		{
            //businesscall.WarningCustommessage('Validation:', 'Please enter all required values!');
			if(username.length <= 0){
				usernameInput.parent('span').addClass('has-error');
				usernameInput.after('<small class="help-block errorText">Username/Email is required</small>');
				errorCount++;
			}
			if(pasword.length <= 0){
				passwordInput.parent('span').addClass('has-error');
				passwordInput.after('<small class="help-block errorText">Password is required</small>');
				errorCount++;
			}
        }

        if (!businesscall.ValidateEmail(username) && username.length > 0) {
            //businesscall.WarningCustommessage('Validation:', 'Please enter valid username/email!');
            usernameInput.parent('span').addClass('has-error');
			usernameInput.after('<small class="help-block errorText">Please enter valid username/email!</small>');
			errorCount++;
        }

		if(errorCount == 0)
		{
			var userinfo = { username: username, pasword: pasword };
			$.ajax({
				type: "POST",
				url: baseUrl+"/security/validatecredentials",
				data: JSON.stringify(userinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Username and password does not match. please try again!');
					} else if(data == "Success") {
						businesscall.ValidCustommessage('Success:', 'You are successfully Login.');
						location.href = baseUrl+'/security/dashboard';
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
    },
    ForgetPass: function () {
		
        var username = $('#txtfmail').val();
        //var pasword = $('#txtcpassword').val();
        var question_id = $('#ddlfquestion').val();
        var answer = $('#txtfanswer').val();
		jQuery('#verifyquestion .errorText').remove();
		var errorCount = 0;
		
		jQuery('#verifyquestion').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'txtfmail' && !businesscall.ValidateEmail(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Please enter valid email!</small>');
					errorCount++;
				}
		})

        /*if (username.length <= 0 || question_id <= 0 || answer.length <= 0) {
            businesscall.WarningCustommessage('Validation:', 'Please enter all required values!');
            return;
        }

        if (!businesscall.ValidateEmail(username)) {
            businesscall.WarningCustommessage('Validation:', 'Please enter valid username/email!');
            return;
        }*/

		if(errorCount == 0)
		{
			var userinfo = { username: username, question_id: question_id, answer: answer };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/security/forgetpassword",
				data: JSON.stringify(userinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails")
					{
						businesscall.InValidCustommessage('Fail:', 'Recover question does not map with answer.');
					}
					else if (data == "noMail")
					{
						businesscall.InValidCustommessage('Fail:', 'Please enter registered email.');
					}
					else if (data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Please update password.');
						$('#changepassword').show(500);
						$('#verifyquestion').hide(500);
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
    },
    ChangePass: function () {

        var username = $('#txtfmail').val();
        var pasword = $('#txtfpassword').val();
        var Rpassword = $('#txtrpassword').val();
		jQuery('#changepassword .errorText').remove();
		var errorCount = 0;
		
		jQuery('#changepassword').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'txtfpassword' && !businesscall.ValidatePassword(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Password must have minimum at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!</small>');
					errorCount++;
				}
		})

        /*if (username.length <= 0 || pasword.length <= 0 ) {
            businesscall.WarningCustommessage('Validation:', 'Please enter all required values!');
            return;
        }

        if (!businesscall.ValidateEmail(username)) {
            businesscall.WarningCustommessage('Validation:', 'Please enter valid username/email!');
            return;
        }
        
        if (!businesscall.ValidatePassword(pasword)) {
            businesscall.WarningCustommessage('Validation:', 'Password must have minimum at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
            return;
        }*/

        if (errorCount == 0 && pasword != Rpassword) {
            businesscall.WarningCustommessage('Validation:', 'Re-enter password should be equal!');
            errorCount++;
        }

		if(errorCount == 0)
		{				
			var userinfo = { username: username, pasword: pasword };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/security/setpassword",
				data: JSON.stringify(userinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails")
					{
						businesscall.InValidCustommessage('Fail:', 'Password does not change.');
					}
					else if (data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Password changed successfully! please login');
						$('#changepassword').hide(500);
						$('#verifyquestion').show(500);
						$('.back-to-login-link').click();
	
						$('#txtfmail').val('');
						$('#txtcpassword').val('');
						$('#ddlfquestion').val(0);
						$('#txtfanswer').val('');
						$('#txtrpassword').val('');
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
    },
    UpdatePass: function () {

        var username = $('#hdnuserId').val();
        var pasword = $('#txtnpassword').val();
        var oldpasword = $('#txtopassword').val();
        var Rpassword = $('#txtrpassword').val();
		
		jQuery('#updatePassword .errorText').remove();
		var errorCount = 0;
		
		jQuery('#updatePassword').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'txtnpassword' && !businesscall.ValidatePassword(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Password must have minimum at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!</small>');
					errorCount++;
				}
		})
		
        
        /*if (pasword.length <= 0 || oldpasword.length <= 0) {
            businesscall.WarningCustommessage('Validation:', 'Please enter all required values!');
            return;
        }

        if (!businesscall.ValidatePassword(pasword)) {
            businesscall.WarningCustommessage('Validation:', 'Password must have minimum at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
            return;
        }*/

        if (errorCount == 0 && pasword != Rpassword) {
            businesscall.WarningCustommessage('Validation:', 'Re-enter password should be equal!');
            return;
        }
	
		if(errorCount == 0)
		{
			var userinfo = { username: username, pasword: pasword, oldpasword: oldpasword };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/security/changepassword",
				data: JSON.stringify(userinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Old Password does not map. please enter valid password!');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Password changed successfully.');
						$('.btnclose').click();
						//setTimeout(function () { businesscall.LogoutMe(); }, 2000);
						$('#txtnpassword').val('');
						$('#txtopassword').val('');
						$('#txtrpassword').val('');
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
    },
    LogoutMe: function () {
        $.ajax({
            type: "GET",
            url: baseUrl+"/security/logoutme",
            data: null,
            datatype: "html",
            success: function (data) {
                location.href = baseUrl+'';
            },
            error: function (data) {
                businesscall.InValidCustommessage('Fail:', 'Please try again later!');
            }
        });
    },
	ProfileInfo: function() {
		$.ajax({
            type: "GET",
            url: baseUrl+"/security/profile",
            data: null,
            datatype: "html",
            success: function (data) {
                if(data.status)
				{
					var userInfo = data.data;
					jQuery('#txtfname').val(userInfo.first_name);
					jQuery('#txtmiddle1').val(userInfo.middle_name1);
					jQuery('#txtmiddle2').val(userInfo.middle_name2);
					jQuery('#txtlname').val(userInfo.last_name);
					jQuery('#txttelephone').val(userInfo.telephone);
					jQuery('#txticard').val(userInfo.icard_no);
					businesscall.RemoveFormError('editProfile');
				}
				else
				{
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
            },
            error: function (data) {
                businesscall.InValidCustommessage('Fail:', 'Please try again later!');
            }
        });
	},
	SecurityQue: function() {
		$.ajax({
            type: "GET",
            url: baseUrl+"/security/que",
            data: null,
            datatype: "html",
            success: function (data) {
                if(data.status)
				{
					var queData = data.data;
					var optionHtml = '<option value="" selected="selected">Please select security question</option>';
					jQuery.each(queData, function(index, data){
						optionHtml += '<option value="'+data.question_id+'">'+data.question_desc+'</option>';
					})
					jQuery('#ddlquestions, #ddlfquestion').html(optionHtml);
				}
				else
				{
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
            },
            error: function (data) {
                businesscall.InValidCustommessage('Fail:', 'Please try again later!');
            }
        });
	},
	AddCustomer: function(){
		jQuery('#addCustomerForm .errorText').remove();
		var errorCount = 0;
		jQuery('#addCustomerForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'cutomerEmail' && !businesscall.ValidateEmail(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Please enter valid email!</small>');
					errorCount++;
				}
				else if(id == 'cutomerPassword' && !businesscall.ValidatePassword(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Password must have minimum at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!</small>');
					errorCount++;
				}
		})
		if(errorCount == 0)
		{
			var customerName = $('#cutomerName').val();
			var fName = $('#cutomerFirstName').val();
			var lName = $('#cutomerLastName').val();
			var middleName1 = $('#cutomerMiddleName1').val();
			var middleName2 = $('#cutomerMiddleName2').val();
			var email = $('#cutomerEmail').val();
			var telephone = $('#cutomerTelephone').val();
			var location = $('#cutomerLocation').val();
			var password = $('#cutomerPassword').val();
			var securityQue = $('#cutomerSecurityQue').val();
			var answer = $('#cutomerAnswer').val();
			
			var data = { customerName:customerName, firstname:fName, lastname:lName, middleName1:middleName1, middleName2:middleName2, email:email, location:location, password:password, telephone: telephone, question_id:securityQue, answer:answer };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/customer/addCustomer",
				data: JSON.stringify(data),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						jQuery('#btn-customerAddSuccessPopup')[0].click();
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	addLocation: function(){
		jQuery('#addLocationForm .errorText').remove();
		var errorCount = 0;
		jQuery('#addLocationForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'contactEmail' && !businesscall.ValidateEmail(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Please enter valid email!</small>');
					errorCount++;
				}
		})
		if(errorCount == 0)
		{
			var customer = $('#locationCustomer').val();
			var street = $('#locationStreet').val();
			var name = $('#locationName').val();
			var quarter = $('#locationQuarter').val();
			var city = $('#locationCity').val();
			var region = $('#locationRegion').val();
			var zipCode = $('#locationZipCode').val();
			
			var contactFname = $('#contactFname').val();
			var contactLname = $('#contactLname').val();
			var contactMname1 = $('#contactMname1').val();
			var contactMname2 = $('#contactMname2').val();
			var contactTelephone = $('#contactTelephone').val();
			var contactEmail = $('#contactEmail').val();
			
			var locationinfo = { customer:customer, name:name, quarter:quarter, city:city, region:region, zipCode:zipCode, street:street, contactFname:contactFname, contactLname:contactLname, contactMname1:contactMname1, contactMname2:contactMname2, contactTelephone:contactTelephone, contactEmail:contactEmail };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/location/addLocation",
				data: JSON.stringify(locationinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Location addedd successfully');
						setTimeout(function(){
							location.href = baseUrl+'/location';
						},500);
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	addUser: function(){
		jQuery('#addUserForm .errorText').remove();
		var errorCount = 0;
		jQuery('#addUserForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'userEmail' && !businesscall.ValidateEmail(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Please enter valid email!</small>');
					errorCount++;
				}
				else if(id == 'userPassword' && !businesscall.ValidatePassword(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Password must have minimum at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!</small>');
					errorCount++;
				}
		})
		
		if(errorCount == 0)
		{
			var customer = $('#userCustomer').val();
			var fName = $('#userFirstName').val();
			var lName = $('#userLastName').val();
			var middleName1 = $('#userMiddleName1').val();
			var middleName2 = $('#userMiddleName2').val();
			var email = $('#userEmail').val();
			var telephone = $('#userTelephone').val();
			var role = $('#userRole').val();
			var location = $('#userLocation').val();
			var password = $('#userPassword').val();
			var securityQue = $('#userSecurityQue').val();
			var answer = $('#userAnswer').val();
			var customer_id = $('#userCustomer').val();
			var userDesignateACP = $('#userDesignateACP').is(":checked");
			
			var data = { customer:customer, firstname:fName, lastname:lName, middleName1:middleName1, middleName2:middleName2, email:email, role:role, location:location, password:password, telephone: telephone, question_id:securityQue, answer:answer, userDesignateACP:userDesignateACP, customer_id: customer_id };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/user/addUser",
				data: JSON.stringify(data),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data.status == "Exist")
					{
						businesscall.InValidCustommessage('Fail:', 'User already exist for same email </br> Either login or change the email!');
					} 
					else if (data.status == "Fails")
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data.status == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'User added successfully');
						if(data.level == '1')
						{
							jQuery('#btn-userAddSuccessPopup')[0].click();
						}
						else if(data.level == '2')
						{
							jQuery('#btn-userAddSuccessPopupSub')[0].click();
						}
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	addSupport: function(){
		jQuery('#addSupportTicketForm .errorText').remove();
		var errorCount = 0;
		jQuery('#addSupportTicketForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
		})
		
		if(errorCount == 0)
		{
			var supportNumber = $('#supportNumber').val();
			var cid = $('#supportCreatedBy').attr('cid');
			var createdOn = $('#supportCreatedOn').val();
			var priority = $('#supportPriority').val();
			var status = $('#supportStatus').val();
			var subStatus = $('#supportSubStatus').val();
			var serviceAffected = $('#supportServiceAffected').val();
			var discription = $('#supportDiscription').val();
			var location = $('#supportLocation').val();
			var assignmentGroup = $('#supportAssignmentGroup').val();
			var customer = $('#supportCustomer').val();
			
			var data = { supportNumber:supportNumber, cid:cid, createdOn:createdOn, priority:priority, status:status, subStatus:subStatus, serviceAffected:serviceAffected, discription:discription, location:location, assignmentGroup: assignmentGroup, customer:customer };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/support/addrequest",
				data: JSON.stringify(data),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Ticket generated successfully');
						setTimeout(function(){
							document.location.href = baseUrl+'/support/manage';
						},500);
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	UpdateCustomer: function(){
		jQuery('#editCustomerForm .errorText').remove();
		var errorCount = 0;
		jQuery('#editCustomerForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'cutomerEmail' && !businesscall.ValidateEmail(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Please enter valid email!</small>');
					errorCount++;
				}
				
		})
		if(errorCount == 0)
		{
			var customerName = $('#cutomerName').val();
			var fName = $('#cutomerFirstName').val();
			var lName = $('#cutomerLastName').val();
			var middleName1 = $('#cutomerMiddleName1').val();
			var middleName2 = $('#cutomerMiddleName2').val();
			var email = $('#cutomerEmail').val();
			var telephone = $('#cutomerTelephone').val();
			var location = $('#cutomerLocation').val();
			var securityQue = $('#cutomerSecurityQue').val();
			var answer = $('#cutomerAnswer').val();
			
			var data = { customerName:customerName, firstname:fName, lastname:lName, middleName1:middleName1, middleName2:middleName2, email:email,  location:location, telephone: telephone, question_id:securityQue, answer:answer };
			
			var id = $('#editCustomerForm').attr('cid');
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/customer/editcustomer/"+id,
				data: JSON.stringify(data),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Customer information update successfully.');
						setTimeout(function(){
							document.location.href = baseUrl+'/customer';
						},500);
						
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	UpdateLocation: function(){
		jQuery('#editLocationForm .errorText').remove();
		var errorCount = 0;
		jQuery('#editLocationForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'contactEmail' && !businesscall.ValidateEmail(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Please enter valid email!</small>');
					errorCount++;
				}
		})
		if(errorCount == 0)
		{
			var customer = $('#locationCustomer').val();
			var name = $('#locationName').val();
			var street = $('#locationStreet').val();
			var quarter = $('#locationQuarter').val();
			var city = $('#locationCity').val();
			var region = $('#locationRegion').val();
			var zipCode = $('#locationZipCode').val();
			
			var contactFname = $('#contactFname').val();
			var contactLname = $('#contactLname').val();
			var contactMname1 = $('#contactMname1').val();
			var contactMname2 = $('#contactMname2').val();
			var contactTelephone = $('#contactTelephone').val();
			var contactEmail = $('#contactEmail').val();
			
			var locationinfo = { customer:customer, name:name, quarter:quarter, city:city, region:region, zipCode:zipCode, street:street, contactFname:contactFname, contactLname:contactLname, contactMname1:contactMname1, contactMname2:contactMname2, contactTelephone:contactTelephone, contactEmail:contactEmail };
			
			var id = $('#editLocationForm').attr('lid');
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/location/editlocation/"+id,
				data: JSON.stringify(locationinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Location information update successfully.');
						setTimeout(function(){
							location.href = baseUrl+'/location';
						},500);
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	updateUser: function(){
		jQuery('#editUserForm .errorText').remove();
		var errorCount = 0;
		jQuery('#editUserForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
				else if(id == 'userEmail' && !businesscall.ValidateEmail(inputVal))
				{
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">Please enter valid email!</small>');
					errorCount++;
				}
		})
		if(errorCount == 0)
		{
			var customer = $('#userCustomer').val();
			var fName = $('#userFirstName').val();
			var lName = $('#userLastName').val();
			var middleName1 = $('#userMiddleName1').val();
			var middleName2 = $('#userMiddleName2').val();
			var email = $('#userEmail').val();
			var telephone = $('#userTelephone').val();
			var role = $('#userRole').val();
			var location = $('#userLocation').val();
			var securityQue = $('#userSecurityQue').val();
			var answer = $('#userAnswer').val();
			var userDesignateACP = $('#userDesignateACP').is(":checked");
			var customer_id = $('#userCustomer').val();
			
			var data = { customer:customer, firstname:fName, lastname:lName, middleName1:middleName1, middleName2:middleName2, email:email, role:role, location:location, telephone: telephone, question_id:securityQue, answer:answer, userDesignateACP:userDesignateACP, customer_id:customer_id };
			
			var id = $('#editUserForm').attr('uid');
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/user/edituser/"+id,
				data: JSON.stringify(data),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Exist")
					{
						businesscall.InValidCustommessage('Fail:', 'User already exist for same email </br> Either login or change the email!');
					} 
					else if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'User updated successfully');
						setTimeout(function(){
							document.location.href = baseUrl+'/user';
						},500);
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	updateSupport: function(){
		
		jQuery('#editSupportTicketForm .errorText').remove();
		var errorCount = 0;
		jQuery('#editSupportTicketForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
		})
		
		if(errorCount == 0)
		{
			var priority = $('#supportPriority').val();
			var status = $('#supportStatus').val();
			var subStatus = $('#supportSubStatus').val();
			var serviceAffected = $('#supportServiceAffected').val();
			var discription = $('#supportDiscription').val();
			var location = $('#supportLocation').val();
			
			var data = { priority:priority, status:status, subStatus:subStatus, serviceAffected:serviceAffected, discription:discription, location:location };
			
			var id = $('#editSupportTicketForm').attr('tid');
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/support/editticket/"+id,
				data: JSON.stringify(data),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Ticket updated successfully');
						setTimeout(function(){
							document.location.href = baseUrl+'/support/manage';
						},500);
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	addSupportHistory: function(){
		
		jQuery('#editSupportTickeHistoryForm .errorText').remove();
		var errorCount = 0;
		jQuery('#editSupportTickeHistoryForm').find('.form-control.req').each(function(){
				var that = jQuery(this);
				var inputVal = that.val();
				var id = that.attr('id');
				that.parent('span').removeClass('has-error');
				
				if(inputVal == '')
				{
					var palceHolderVal = that.attr('placeholder');
					that.parent('span').addClass('has-error');
					that.after('<small class="help-block errorText">'+palceHolderVal+' is required</small>');
					errorCount++;
				}
		})
		
		if(errorCount == 0)
		{
			var historyClientUpdate = $('#supportServiceHistoryClientUpdate').val();
			var historyInternalUpdate = $('#supportServiceHistoryInternalUpdate').val();
			
			var data = { historyClientUpdate:historyClientUpdate, historyInternalUpdate:historyInternalUpdate };
			
			var id = $('#editSupportTicketForm').attr('tid');
	
			$.ajax({
				type: "POST",
				url: baseUrl+"/support/addsupporthistory/"+id,
				data: JSON.stringify(data),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Support History added successfully');
						$('#supportServiceHistoryClientUpdate').val('');
						$('#supportServiceHistoryInternalUpdate').val('');
						setTimeout(function(){
							businesscall.getSupportHistory(id);
						},500);
					}
					else
					{
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	RemoveCustomer: function(customerId){
		var r = confirm("Are you sure, you want to delete?");
			if (r == true) {
				$.ajax({
					type: "GET",
					url: baseUrl+"/customer/deletecustomer/"+customerId,
					data: null,
					datatype: "html",
					success: function (data) {
						if (data == "Fails") {
							businesscall.InValidCustommessage('Fail:', 'Please try again later');
						}
						else if(data == "Success")
						{
							businesscall.ValidCustommessage('Success:', 'Customer removed successfully.');
							$('#customerList').DataTable().ajax.reload();
						}
						else
						{
							businesscall.InValidCustommessage('Fail:', 'Please try again later!');
						}
					},
					error: function (data) {
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				});
			} else { }
	},
	RemoveLocation: function(locationId)
	{
		var r = confirm("Are you sure, you want to delete?");
			if (r == true) {
				$.ajax({
					type: "GET",
					url: baseUrl+"/location/deletelocation/"+locationId,
					data: null,
					datatype: "html",
					success: function (data) {
						if (data == "Fails") {
							businesscall.InValidCustommessage('Fail:', 'Please try again later');
						}
						else if(data == "Success")
						{
							businesscall.ValidCustommessage('Success:', 'Location removed successfully.');
							$('#locationList').DataTable().ajax.reload();
						}
						else
						{
							businesscall.InValidCustommessage('Fail:', 'Please try again later!');
						}
					},
					error: function (data) {
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				});
			} else { }
	},
	RemoveUser: function(userId)
	{
		var r = confirm("Are you sure, you want to delete?");
			if (r == true) {
				$.ajax({
					type: "GET",
					url: baseUrl+"/user/deleteuser/"+userId,
					data: null,
					datatype: "html",
					success: function (data) {
						if (data == "Fails") {
							businesscall.InValidCustommessage('Fail:', 'Please try again later');
						}
						else if(data == "Success")
						{
							businesscall.ValidCustommessage('Success:', 'User removed successfully.');
							$('#userList').DataTable().ajax.reload();
						}
						else
						{
							businesscall.InValidCustommessage('Fail:', 'Please try again later!');
						}
					},
					error: function (data) {
						businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				});
			} else { }
	},
	getSupportHistory: function(id)
	{
		$.ajax({
            type: "GET",
            url: baseUrl+"/support/gethistory/"+id,
            data: null,
            datatype: "html",
            success: function (data) {
                if(data.status)
				{
					var historyData = data.data;
					var optionHtml = '';
					jQuery.each(historyData, function(index, data){
						optionHtml += '<div class="form-group"><label for="inputError2" class="col-xs-12 col-sm-2 control-label no-padding-right"><b>Client Update ('+data.modify_date+')</b></label><div class="col-xs-12 col-sm-10"><span class="input-icon block">'+data.client_update+'</span></div></div><div class="form-group"><label for="inputError2" class="col-xs-12 col-sm-2 control-label no-padding-right"><b>Internal Update ('+data.modify_date+')</b></label><div class="col-xs-12 col-sm-10"><span class="input-icon block">'+data.internal_update+'</span></div></div>'
					})
					jQuery('#historyList').html(optionHtml);
				}
				else
				{
					//businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
            },
            error: function (data) {
                businesscall.InValidCustommessage('Fail:', 'Please try again later!');
            }
        });
	},
	GetCustomerData: function(id)
	{
		jQuery('#div_customer').hide();
		jQuery('#userCustomer').html('');
		var role_id = jQuery('#userRole').val();
		var location_id = jQuery('#userLocation').val();
		if(role_id == '6' && location_id != '')
		{
			$.ajax({
				type: "GET",
				url: baseUrl+"/customer/sublocation/"+location_id,
				data: null,
				datatype: "html",
				success: function (data) {
					if(data)
					{
						var customerData = data;
						var optionHtml = '<option value="">Select Customer</option>';
						jQuery.each(customerData, function(index, data){
							optionHtml += '<option value="'+data.user_id+'">'+data.customer_name+'</option>'
						})
						jQuery('#userCustomer').html(optionHtml);
						jQuery('#div_customer').show();
					}
					else
					{
						//businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	GetSupportCustomerData: function()
	{
		jQuery('#div_customer').hide();
		jQuery('#userCustomer').html('');
		var location_id = jQuery('#supportLocation').val();
		if(location_id != '')
		{
			$.ajax({
				type: "GET",
				url: baseUrl+"/customer/sublocation/"+location_id,
				data: null,
				datatype: "html",
				success: function (data) {
					if(data)
					{
						var customerData = data;
						var optionHtml = '<option value="">Select Customer</option>';
						jQuery.each(customerData, function(index, data){
							optionHtml += '<option value="'+data.user_id+'">'+data.customer_name+'</option>'
						})
						jQuery('#supportCustomer').html(optionHtml);
						jQuery('#div_customer').show();
					}
					else
					{
						//businesscall.InValidCustommessage('Fail:', 'Please try again later!');
					}
				},
				error: function (data) {
					businesscall.InValidCustommessage('Fail:', 'Please try again later!');
				}
			});
		}
	},
	RemoveFormError: function(formid) {
			// Remove Error
			jQuery('#'+formid+' .errorText').remove();
			jQuery('#'+formid).find('.form-control.req').each(function(){
					var that = jQuery(this);
					that.parent('span').removeClass('has-error');
			})
	},
    ValidCustommessage: function (title, text) {
        $.gritter.add({
            title: title,
            text: text,
            class_name: 'gritter-success'
        });
    },
    InValidCustommessage: function (title, text) {
        $.gritter.add({
            title: title,
            text: text,
            class_name: 'gritter-error'
        });
    },
    WarningCustommessage: function (title, text) {
        $.gritter.add({
            title: title,
            text: text,
            class_name: 'gritter-warning'
        });
    },
    ValidateEmail: function (inputText) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(inputText) == false) {
            return false;
        }

        return true;
    },
    ValidatePassword: function (inputText) {

        var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

        if (reg.test(inputText) == false) {
            return false;
        }

        return true;
    }

}

jQuery(function ($) {

    $(document).on('click', '.toolbar a[data-target]', function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.widget-box.visible').removeClass('visible');//hide others
        $(target).addClass('visible');//show target
    });

    $("#btnregister").click(function () {
        businesscall.UserSignup();
    });

    $("#btnlogin").click(function () {
        businesscall.UserSignIn();
    });

    $("#btnsendme").click(function () {
        businesscall.ForgetPass();
    });

    $("#btnupdatepass").click(function () {
        businesscall.ChangePass();
    });

    $("#logout").click(function () {
        businesscall.LogoutMe();
    });

    $("#btnchangepass").click(function () {
        businesscall.UpdatePass();
    });

    $("#btneditprofile").click(function () {
        businesscall.UserEdit();
    });
	
	$("#btnAddCustomer").click(function () {
        businesscall.AddCustomer();
    });
	
	$("#btnEditCustomer").click(function () {
        businesscall.UpdateCustomer();
    });
	
	$("#btnAddLocation").click(function () {
        businesscall.addLocation();
    });
	
	$("#btnEditLocation").click(function () {
        businesscall.UpdateLocation();
    });
	
	$("#btnAddUser").click(function () {
        businesscall.addUser();
    });
	
	$("#btnEditUser").click(function () {
        businesscall.updateUser();
    });
	
	$("#btnAddSupport").click(function () {
        businesscall.addSupport();
    });
	
	$("#btnBackToSupport").click(function () {
        document.location.href = baseUrl+'/support/manage';
    });
	
	$("#btnEditSupport").click(function () {
        businesscall.updateSupport();
    });
	
	$("#btnAddSupportHistory").click(function () {
        businesscall.addSupportHistory();
    });
});