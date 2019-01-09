<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Security extends CI_Controller {
   
    public function __construct()
    {
      	parent::__construct(); 
	  	$this->load->model('security_model');    
    }
   
    // Index Call
    public function index()
    {
	    if($this->session->userdata('user'))
	    {
	   		redirect($this->config->item('base_url').'security/dashboard', 'refresh');  
	    }
	    else
	    {
		   $this->load->view('security/login');
	    }
    }
   
    // User Validation
    public function validatecredentials()
    {
		echo $this->security_model->login_process();  		
    }
 	
	// Logout 
	public function logoutme()
	{
		echo $this->security_model->logout_process();  
	}

	public function dashboard()
	{
	   if($this->session->userdata('user'))
	   {
		   $userData = $this->session->userdata('user');
		   $userData['page_title'] = 'Dashboard';
		   
		   $this->load->view('common/header', $userData);
		   $this->load->view('dashboard/dashboard', $userData);
	   	   $this->load->view('common/footer', $userData);
	   }
	   else
	   {
			redirect($this->config->item('base_url'), 'refresh');   
	   }
	}
	
}