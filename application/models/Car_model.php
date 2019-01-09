<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Car_Model extends CI_Model
{
	public $carTable = array();
	
	public function __construct()
	{ 
		parent::__construct();
		$this->carTable['rows'] = array('name','company','type ','mileage ','fuelType','airbags','createdAt','updatedAt');
	}
	
	/*
	 * Get Car Data
	 */
	public function getCarData($length, $start, $searchValue, $orderOn, $orderBy)
	{
		
		$startQuery = "SELECT * FROM (SELECT CAR.id, CAR.name, CAR.company, IF(CAR.type = 1, 'Manual', 'Automatic') AS type, CAR.mileage, IF(CAR.fuelType = 1, 'Petrol', 'Diesel') AS fuelType , CAR.airbags, CAR.createdAt, CAR.updatedAt FROM car AS CAR WHERE CAR.deletedAt is null ) AS RESULT WHERE 1";

		$whereCondition = '';
		if($searchValue != '')
		{
			$whereCondition .= ' AND ( RESULT.name LIKE "%'.$searchValue.'%" OR RESULT.company LIKE "%'.$searchValue.'%" OR RESULT.type LIKE "%'.$searchValue.'%" OR RESULT.mileage LIKE "%'.$searchValue.'%" OR RESULT.fuelType LIKE "%'.$searchValue.'%" OR RESULT.airbags LIKE "%'.$searchValue.'%") ';
		}
		$limit = ' ORDER BY RESULT.'.$this->carTable['rows'][$orderOn].' '.$orderBy.' LIMIT '.$length.' OFFSET '.$start;
		

		$resultData = array();
		$finalDataQuery = $startQuery.$whereCondition.$limit;
		$resultData['data'] = $this->db->query($finalDataQuery)->result_array();

		$finalDataQuery = $startQuery.$whereCondition;
		$resultData['filterCount'] = $this->db->query($finalDataQuery)->num_rows();

		$totalDataQuery = $startQuery;
		$resultData['totalCount'] = $this->db->query($totalDataQuery)->num_rows();

		return ($resultData) ? $resultData : array();
	}
	
	// Add New Car
	public function addCar()
	{
		if($this->security->xss_clean($this->input->raw_input_stream))
		{
			$postData = $this->security->xss_clean($this->input->raw_input_stream);
			$data = json_decode($postData, true);
			
			$car = array();
			$car['name'] = $data['carName'];
			$car['company'] = $data['carCompany'];
			$car['type'] = $data['CarType'];
			$car['mileage'] = $data['carMileage'];
			$car['fuelType'] = $data['carFuelType'];
			$car['airbags'] = $data['carAirbags'];
			
			$this->db->insert('car', $car);
			
			return 'Success';
		}
		else
		{
			return 'Fails';
		}
	}
	
	/**
     * Get Car Details
     */
	public function getCar($id)
	{
		$query = 'SELECT CAR.* FROM `car` AS CAR WHERE CAR.id ="'.$id.'" and CAR.deletedAt is null';
		$data = $this->db->query($query)->row_array();
		return ($data) ? $data: NULL;
	}
	
	/*
	 * Update Car
	 */
	public function updateCar($id)
	{
		if($this->security->xss_clean($this->input->raw_input_stream))
		{
			$postData = $this->security->xss_clean($this->input->raw_input_stream);
			$data = json_decode($postData, true);
			
			$update_data = array();
			$update_data['name'] = $data['carName'];
			$update_data['company'] = $data['carCompany'];
			$update_data['type'] = $data['CarType'];
			$update_data['mileage'] = $data['carMileage'];
			$update_data['fuelType'] = $data['carFuelType'];
			$update_data['airbags'] = $data['carAirbags'];
			
			$where = array('id'=>$id);
			$this->db->update('car', $update_data, $where);
			echo 'Success';
		}
		else
		{
			echo 'Fails';
		}
	}
	
	// remove car
	public function deleteCar($id)
	{
		$update_data['deletedAt'] = date('Y-m-d H:i:s');;
			
		$where = array('id'=>$id);
		$this->db->update('car', $update_data, $where);
		echo 'Success';
	}

}