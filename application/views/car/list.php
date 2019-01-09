<div class="page-content">
    <div class="page-header">
        <h1>
            Cars Manage 
        </h1>
    </div>

    <div class="row">
        <div class="col-xs-12">

            <div class="widget-box">
            	 <div class="widget-header">
                    <h4 class="widget-title lighter">Cars</h4>
                  	  <a href="<?php echo base_url(); ?>car/add" class="btn btn-info floatright" role="button">Add New Car</a>
                </div>
                <div class="widget-body">
                    <div class="widget-main">
						<table id="carList" class="cell-border" style="width:100%">
	                        <thead>
	                            <tr>
	                                <th>Name</th>
	                                <th>Company</th>
	                                <th>Type</th>
	                                <th>Mileage</th>
	                                <th>Fuel Type</th>
	                                <th>Airbags</th>
	                                <th>Created Date</th>
	                                <th>Updated Date</th>
	                                <th class="no-sort">Action</th>
	                            </tr>
	                        </thead>
	                        <tfoot>
	                            <tr>
	                                <th>Name</th>
	                                <th>Company</th>
	                                <th>Type</th>
	                                <th>Mileage</th>
	                                <th>Fuel Type</th>
	                                <th>Airbags</th>
	                                <th>Created Date</th>
	                                <th>Updated Date</th>
	                                <th class="no-sort">Action</th>
	                            </tr>
	                        </tfoot>
	                    </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<script>
var tableData;
function loadCarListData()
{
  tableData = $('#carList').DataTable( {
        "processing": true,
        "serverSide": true,
		"scrollX": true,
		"order": [[ 7, "desc" ]],
        "ajax":
			{
				"url": baseUrl+"/car/data",
				"type": "POST"
			},
        "columns": [
            { "data": "name" },
			{ "data": "company"},
			{ "data": "type" },
			{ "data": "mileage" },
			{ "data": "fuel_type" },
			{ "data": "airbags" },
            { "data": "created_date" },
			{ "data": "updated_date" },
			{"mRender": function ( data, type, row ) {
					
						var returnData = '<a title="Update" href=<?php echo base_url(); ?>car/edit/'+row['id']+' class="green"><i class="ace-icon fa fa-pencil bigger-130"></i></a> | <a title="Delete" href="javascript:void(0);" onClick="businesscall.RemoveCar('+row['id']+')" class="red"><i class="ace-icon fa fa-trash-o bigger-130"></i></a>'; 
				
					return returnData;
				}
			}
        ],
		"columnDefs": [{
			  "targets": 'no-sort',
			  "orderable": false,
		}]
    } );
	
	
}

$(document).ready(function() {
	// Load Table
	loadCarListData();
});
</script>
                
           