<div class="page-content">
    <div class="page-header">
        <h1>
            Register New Car
        </h1>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="widget-box">
            	 <div class="widget-header">
                    <h4 class="widget-title lighter">Please enter below information</h4>
                </div>
                <div class="widget-body">
                    <div class="widget-main">
					<form class="form-horizontal" id="addCarForm">
                    	<div class="row">
                         	<div class="col-md-6 form-field-min-height">
                            	<div class="form-group">
                                    <label for="inputError2" class="col-md-3 col-sm-2 col-xs-12 control-label no-padding-right">Name</label>
                                    <div class="col-xs-12 col-sm-10 col-md-9">
                                        <span class="input-icon block">
                                            <input type="text" id="carName" maxlength="50" placeholder="Name" class="form-control  width-100 req" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 form-field-min-height">
                            	<div class="form-group">
                                    <label for="inputError2" class="col-md-3 col-sm-2 col-xs-12 control-label no-padding-right">Company</label>
                                    <div class="col-xs-12 col-sm-10 col-md-9">
                                        <span class="input-icon block">
                                            <input type="text" id="carCompany" maxlength="50" placeholder="Company" class="form-control  width-100 req" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 form-field-min-height">
                            	<div class="form-group">
                                    <label for="inputError2" class="col-md-3 col-sm-2 col-xs-12 control-label no-padding-right">Type</label>
                                    <div class="col-xs-12 col-sm-10 col-md-9">
                                        <span class="input-icon block">
                                            <select id="CarType" placeholder="Type" class="form-control width-100 req">
                                                <option value="">Select Type</option>
                                                <option value="1">Manual</option>
                                                <option value="2">automatic</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                             </div>
                            <div class="col-md-6 form-field-min-height">   
                        		<div class="form-group">
                                    <label for="inputError2" class="col-md-3 col-sm-2 col-xs-12 control-label no-padding-right">Mileage</label>
                                    <div class="col-xs-12 col-sm-10 col-md-9">
                                        <span class="input-icon block">
                                            <input type="text" id="carMileage" maxlength="15" placeholder="Mileage" class="form-control width-100 req" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 form-field-min-height">
                            	<div class="form-group">
                                    <label for="inputError2" class="col-md-3 col-sm-2 col-xs-12 control-label no-padding-right">Fuel Type</label>
                                    <div class="col-xs-12 col-sm-10 col-md-9">
                                        <span class="input-icon block">
                                            <select id="carFuelType" placeholder="Fuel Type" class="form-control width-100 req">
                                                <option value="">Select Fuel Type</option>
                                                <option value="1">Petrol</option>
                                                <option value="2">Diesel</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                             </div>
                            <div class="col-md-6 form-field-min-height">   
                        		<div class="form-group">
                                    <label for="inputError2" class="col-md-3 col-sm-2 col-xs-12 control-label no-padding-right">Airbags</label>
                                    <div class="col-xs-12 col-sm-10 col-md-9">
                                        <span class="input-icon block">
                                            <input type="text" id="carAirbags" maxlength="45" placeholder="Airbags" class="form-control width-100 req" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <div class="wizard-actions">
                        <div class="clearfix">
                            <button type="button" class="btn btn-sm btn-success" id="btnAddCar">
                                <span class="bigger-110">Submit</span>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>