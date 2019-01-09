-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2019 at 10:25 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ventive`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `type` enum('1','2') DEFAULT NULL,
  `mileage` varchar(15) DEFAULT NULL,
  `fuelType` enum('1','2') DEFAULT NULL,
  `airbags` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`id`, `name`, `company`, `type`, `mileage`, `fuelType`, `airbags`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'City', 'Honda', '2', '25.6 kmpl', '1', 'Dual Airbags', '2019-01-10 01:57:18', '2019-01-10 01:57:18', NULL),
(2, 'WRV', 'Honda', '1', '25.5 kmpl', '1', 'Driver Side Airbag', '2019-01-10 01:58:41', '2019-01-10 01:58:41', NULL),
(3, 'Fortuner', 'Toyota', '2', '15.04 kmpl', '2', '7 Airbags', '2019-01-10 01:59:53', '2019-01-10 02:00:36', NULL),
(4, 'Innova Crysta', 'Toyota', '2', '13.68 kmpl', '2', '6 Airbags', '2019-01-10 02:01:44', '2019-01-10 02:09:20', NULL),
(5, 'Rapid', 'Skoda', '1', '21.72 kmpl', '1', 'Dual Airbags', '2019-01-10 02:02:42', '2019-01-10 02:02:42', NULL),
(6, 'Superb', 'Skoda', '2', '18.19 kmpl', '2', '4 Airbags', '2019-01-10 02:03:19', '2019-01-10 02:11:42', NULL),
(7, 'Compass', 'Jeep', '2', '17.1 kmpl', '2', '6 Airbags', '2019-01-10 02:03:58', '2019-01-10 02:11:26', NULL),
(8, 'Wrangler Unlimited', 'Jeep', '1', '12.1 kmpl', '2', 'Dual Airbags', '2019-01-10 02:04:24', '2019-01-10 02:04:24', NULL),
(9, 'Grand Cherokee', 'Jeep', '2', '12.8 kmpl', '2', '4 Airbags', '2019-01-10 02:04:59', '2019-01-10 02:04:59', NULL),
(10, 'XF', 'Jaguar', '2', '19.33 kmpl', '1', '4 Airbags', '2019-01-10 02:05:58', '2019-01-10 02:05:58', NULL),
(11, 'F Type', 'Jaguar', '1', '15.38 kmpl', '2', 'Dual Airbags', '2019-01-10 02:06:29', '2019-01-10 02:06:29', NULL),
(12, 'Discovery', 'Land Rover', '2', '18.0 kmpl', '2', '6 Airbags', '2019-01-10 02:07:20', '2019-01-10 02:07:20', NULL),
(13, 'Q3', 'Audi', '2', '18.51 kmpl', '2', '4 Airbag', '2019-01-10 02:07:58', '2019-01-10 02:07:58', NULL),
(14, 'Q7', 'Audi', '2', '14.75 kmpl', '1', 'Dual Airbags', '2019-01-10 02:08:28', '2019-01-10 02:08:28', NULL),
(15, 'TT', 'Audi', '1', '14.33 kmpl', '2', '4 Airbag', '2019-01-10 02:08:53', '2019-01-10 02:08:53', NULL),
(16, 'Pajero Sport', 'Mitsubishi', '1', '13.5 kmpl', '2', '7 Airbags', '2019-01-10 02:10:07', '2019-01-10 02:10:16', '2019-01-09 21:40:16');

--
-- Triggers `car`
--
DELIMITER $$
CREATE TRIGGER `car_BEFORE_UPDATE` BEFORE UPDATE ON `car` FOR EACH ROW BEGIN
	SET NEW.updatedAt = now();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `firstName` varchar(30) DEFAULT NULL,
  `emailId` varchar(45) NOT NULL,
  `password` text NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `emailId`, `password`, `createdAt`, `deletedAt`) VALUES
(1, 'Admin', 'admin@admin.com', '81dc9bdb52d04dc20036dbd8313ed055', '2019-01-09 23:32:11', NULL),
(2, 'User', 'user@admin.com', '81dc9bdb52d04dc20036dbd8313ed055', '2019-01-09 23:33:08', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
