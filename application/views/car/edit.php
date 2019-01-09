<!-- Car Form: Start -->
<div class="page-content">
    <div class="page-header">
        <h1>
            Update Car
        </h1>
    </div><!-- /.page-header -->

    <div class="row">
        <div class="col-xs-12">
            <!-- PAGE CONTENT BEGINS -->
			
            <div class="widget-box">
            	 <div class="widget-header">
                    <h4 class="widget-title lighter">Please enter below information</h4>
                </div>
                <div class="widget-body">
                    <div class="widget-main">
					<form class="form-horizontal" id="editCarForm" cid="<?php echo $record['id']; ?>">
                        <div class="row">
                         	<div class="col-md-6 form-field-min-height">
                            	<div class="form-group">   
                                    <label for="inputError2" class="col-md-3 col-sm-2 col-xs-12 control-label no-padding-right">Name</label>
                                    <div class="col-xs-12 col-sm-10 col-md-9">
                                        <span class="input-icon block">
                                            <input type="text" id="carName" placeholder="Name" value="<?php echo $record['name']; ?>" class="form-control width-100 req" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                         	<div class="col-md-6 form-field-min-height">
                            	<div class="form-group">
                                    <label for="inputError2" class="col-md-3 col-sm-2 col-xs-12 control-label no-padding-right">Company</label>
                                    <div class="col-xs-12 col-sm-10 col-md-9">
                                        <span class="input-icon block">
                                            <input type="text" id="carCompany" placeholder="Company" value="<?php echo $record['company']; ?>" class="form-control  width-100 req" />
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
                                                <option value="1" <?php if($record['type'] == '1') { echo 'selected="selected"'; } ?> >Manual</option>
                                                <option value="2" <?php if($record['type'] == '2') { echo 'selected="selected"'; } ?> >Automatic</option>
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
                                            <input type="text" id="carMileage" placeholder="Mileage" value="<?php echo $record['mileage'] ?>" class="form-control width-100 req" />
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
                                                <option value="1" <?php if($record['fuelType'] == '1') { echo 'selected="selected"'; } ?> >Petrol</option>
                                                <option value="2" <?php if($record['fuelType'] == '2') { echo 'selected="selected"'; } ?> >Diesel</option>
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
                                            <input type="text" id="carAirbags" placeholder="Airbags" value="<?php echo $record['airbags'] ?>" class="form-control width-100 req" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>    
                       
                    </form>
                    <hr />
                    <div class="wizard-actions">
                        <div class="clearfix">
                            <button type="button" class="btn btn-sm btn-success" id="btnEditCar">
                                <span class="bigger-110">Update</span>
                            </button>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>

           
        </div>
    </div>
</div>               
           