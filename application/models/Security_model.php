<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Security_Model extends CI_Model
{
	public function __construct()
	{ 
		parent::__construct();
	}
	
	
	/*
	 * Check Login Access
	 */
	public function check_login($username, $password)
	{
		$password = md5($password);
		$query = 'SELECT * FROM `user` AS USER WHERE USER.emailId ='.$this->db->escape(trim($username)).' AND USER.password = '.$this->db->escape(trim($password)).' AND USER.deletedAt is null';
		$user_data = $this->db->query($query)->row_array();
		return ($user_data) ? $user_data : NULL;
	}
	
	/*
	 * Login Process
	 */
	public function login_process()
	{
		if($this->security->xss_clean($this->input->raw_input_stream))
		{
			$postData = $this->security->xss_clean($this->input->raw_input_stream);
			$data = json_decode($postData, true);
			
			$username = $data['username'];
			$password = $data['pasword'];
			if($username =='' || $password == '')
			{
				return 'Fails';
			}
			
			$user_data =  $this->check_login($username, $password);
			if($user_data)
			{
				$this->session->set_userdata('user', $user_data); // Save data on user's session.
				return 'Success';
			}
			else
			{
				return 'Fails';
			}
		}
		else
		{
			return 'Fails';
		}
	}
	
	/*
	 * Logout Process
	 */
	public function logout_process()
	{
		$user_data = $this->session->userdata('user');
		$this->session->sess_destroy();
		return true;
	}
	
}