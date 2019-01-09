if ('ontouchstart' in document.documentElement) document.write("<script src='/assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>");

var businesscall = {

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

        if (!businesscall.ValidateEmail(username) && username.length > 0)
        {
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
						location.href = baseUrl+'dashboard';
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
	addCar: function(){
		jQuery('#addCarForm .errorText').remove();
		var errorCount = 0;
		jQuery('#addCarForm').find('.form-control.req').each(function(){
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
			var carName = $('#carName').val();
			var carCompany = $('#carCompany').val();
			var CarType = $('#CarType').val();
			var carMileage = $('#carMileage').val();
			var carFuelType = $('#carFuelType').val();
			var carAirbags = $('#carAirbags').val();
			
			var carinfo = { carName:carName, carCompany:carCompany, CarType:CarType, carMileage:carMileage, carFuelType:carFuelType, carAirbags:carAirbags };
	
			$.ajax({
				type: "POST",
				url: baseUrl+"car/addCar",
				data: JSON.stringify(carinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Car register successfully');
						setTimeout(function(){
							location.href = baseUrl+'car';
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
	UpdateCar: function(){
		jQuery('#editCarForm .errorText').remove();
		var errorCount = 0;
		jQuery('#editCarForm').find('.form-control.req').each(function(){
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
			var carName = $('#carName').val();
			var carCompany = $('#carCompany').val();
			var CarType = $('#CarType').val();
			var carMileage = $('#carMileage').val();
			var carFuelType = $('#carFuelType').val();
			var carAirbags = $('#carAirbags').val();
			
			var carinfo = { carName:carName, carCompany:carCompany, CarType:CarType, carMileage:carMileage, carFuelType:carFuelType, carAirbags:carAirbags };
			
			var id = $('#editCarForm').attr('cid');
	
			$.ajax({
				type: "POST",
				url: baseUrl+"car/editCar/"+id,
				data: JSON.stringify(carinfo),
				contentType: "application/json",
				datatype: "html",
				success: function (data) {
					if (data == "Fails") {
						businesscall.InValidCustommessage('Fail:', 'Please try again later');
					}
					else if(data == "Success")
					{
						businesscall.ValidCustommessage('Success:', 'Car information update successfully.');
						setTimeout(function(){
							location.href = baseUrl+'car';
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
	RemoveCar: function(carId)
	{
		var r = confirm("Are you sure, you want to delete?");
			if (r == true) {
				$.ajax({
					type: "GET",
					url: baseUrl+"/car/deletecar/"+carId,
					data: null,
					datatype: "html",
					success: function (data) {
						if (data == "Fails") {
							businesscall.InValidCustommessage('Fail:', 'Please try again later');
						}
						else if(data == "Success")
						{
							businesscall.ValidCustommessage('Success:', 'Car removed successfully.');
							$('#carList').DataTable().ajax.reload();
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

    $("#btnlogin").click(function () {
        businesscall.UserSignIn();
    });

    $("#btnAddCar").click(function () {
        businesscall.addCar();
    });

    $("#logout").click(function () {
        businesscall.LogoutMe();
    });

	$("#btnEditCar").click(function () {
        businesscall.UpdateCar();
    });
	
});