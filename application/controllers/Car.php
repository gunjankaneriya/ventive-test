<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Car extends CI_Controller {

   public function __construct() {
      	
      	parent::__construct(); 
	    if(!$this->session->userdata('user'))
	    {
 		   redirect($this->config->item('base_url'));
	    }

	    $this->load->model('car_model','car');
   }
   
   // Car List
   public function index()
   {
	    $userData = $this->session->userdata('user');
	    $userData['page_title'] = 'Car';
		
	    $data = array();
	   $this->load->view('common/header', $userData);
	   $this->load->view('car/list', $data);
	   $this->load->view('common/footer', $userData);   
   }
   
   // View: Add Car
   public function add()
   {
	   $userData = $this->session->userdata('user');
	   $userData['page_title'] = 'Add Car';
	   $data = array();
	   
	   $this->load->view('common/header', $userData);
	   $this->load->view('car/add', $data);
	   $this->load->view('common/footer', $userData);
   }
   
   // Add Car API
   public function addCar()
   {
	  echo $this->car->addCar();   	
   }
   
    // View: Edit Car
   public function edit($id)
   {
	  if($id == '')
	  {
		redirect($this->config->item('base_url').'car');
		die;
	  }
	   
	   $userData = $this->session->userdata('user');
	   $userData['page_title'] = 'Edit Car';
	   $data  = array();
	   $data['record'] = $this->car->getCar($id);

	   if($data != '' && $data != NULL && sizeof($data) > 0)
	   {
		   $this->load->view('common/header', $userData);
		   $this->load->view('car/edit', $data);
		   $this->load->view('common/footer', $userData);
	   }
   }
   
   // Edit Car API
   public function editCar($id)
   {
	  if($id == '')
	  {
			redirect($this->config->item('base_url').'car');
			die;
	  }
	  echo $this->car->updateCar($id);   	
   }
   
   // Remove API
   public function deletecar($id)
   {
	  if($id == '')
	  {
			redirect($this->config->item('base_url').'car');
			die;
	  }
	  echo $this->car->deleteCar($id);   	
   }
      
   // Get list data
   public function data()
   {
		$length = $_POST['length'];
		$start = $_POST['start'];
		$searchValue = $_POST['search']['value'];
		$orderOn = $_POST['order']['0']['column'];
		$orderBy = $_POST['order']['0']['dir'];
	    
	    $list = $this->car->getCarData($length, $start, $searchValue, $orderOn, $orderBy);

        $data = array();
        foreach ($list['data'] as $info) {
            $row = array();
            $row['id'] = $info['id'];
			$row['name'] = $info['name'];
			$row['company'] = $info['company'];
			$row['type'] = $info['type'];
			$row['mileage'] = $info['mileage'];
			$row['fuel_type'] = $info['fuelType'];
			$row['airbags'] = $info['airbags'];
			$row['created_date'] = $info['createdAt'];
			$row['updated_date'] = $info['updatedAt'];
			$data[] = $row;
        }
 
        $output = array(
                        "draw" => $_POST['draw'],
                        "recordsTotal" =>  $list['totalCount'],
                        "recordsFiltered" => $list['filterCount'],
                        "data" => $data,
                );
        //output to json format
        echo json_encode($output);
   }
}