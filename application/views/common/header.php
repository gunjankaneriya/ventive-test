<!DOCTYPE html>

<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title><?php echo $page_title; ?></title>

    <!-- bootstrap & fontawesome -->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/font-awesome/4.5.0/css/font-awesome.min.css" />

    <!-- page specific plugin styles -->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/select2.min.css" />
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/jquery-ui.custom.min.css" />
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/jquery.gritter.min.css" />

    <!-- text fonts -->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/fonts.googleapis.com.css" />

    <!-- ace styles -->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace.min.css" class="ace-main-stylesheet" id="main-ace-style" />

    <!--[if lte IE 9]>
        <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace-part2.min.css" class="ace-main-stylesheet" />
    <![endif]-->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace-skins.min.css" />
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace-rtl.min.css" />
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/custom.css" />
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/jquery.dataTables.min.css" />
    
    <!--[if lte IE 9]>
      <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace-ie.min.css" />
    <![endif]-->
    <!-- inline styles related to this page -->
    <!-- ace settings handler -->
    <script src="<?php echo  base_url(); ?>assets/js/ace-extra.min.js"></script>

    <!-- HTML5shiv and Respond.js for IE8 to support HTML5 elements and media queries -->
    <!--[if lte IE 8]>
    <script src="<?php echo  base_url(); ?>assets/js/html5shiv.min.js"></script>
    <script src="<?php echo  base_url(); ?>assets/js/respond.min.js"></script>
    <![endif]-->
    
    <!--[if !IE]> -->
    <script src="<?php echo  base_url(); ?>assets/js/jquery-2.1.4.min.js"></script>
    <script src="<?php echo  base_url(); ?>assets/js/jquery.dataTables.min.js"></script>
	
    <script type="text/javascript">
        var baseUrl = <?php echo '"'.base_url().'"'; ?>
    </script>
</head>
    <?php
        $get_current_url_string = uri_string(); /* Url String */
        $get_first_segment = $this->uri->segment(1);
        $get_second_segment = $this->uri->segment(2);
    ?>
<body class="no-skin">
    <div id="navbar" class="navbar navbar-default ace-save-state">
        <div class="navbar-container ace-save-state" id="navbar-container">
            <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
                <span class="sr-only">Toggle sidebar</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <div class="navbar-header pull-left">
                <a href="<?php echo base_url(); ?>" class="navbar-brand">
                    <small>
                        Ventive
                    </small>
                </a>
            </div>

            <div class="navbar-buttons navbar-header pull-right" role="navigation">
                <ul class="nav ace-nav">
                    <li class="light-blue dropdown-modal">
                        <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                            <img class="nav-user-photo" src="<?php echo base_url(); ?>assets/images/avatars/avatar2.png" alt="Users's Photo" />
                            <span class="user-info" title="<?php echo $firstName; ?>">
                                <small>Welcome, </small>
                                    <?php echo $firstName; ?>
                            </span>

                            <i class="ace-icon fa fa-caret-down"></i>
                        </a>

                        <ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                            <li>
                                <a href="#" id="logout">
                                    <i class="ace-icon fa fa-power-off"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div><!-- /.navbar-container -->
    </div>

    <div class="main-container ace-save-state" id="main-container">
       

        <div id="sidebar" class="sidebar                  responsive                    ace-save-state">
            <script type="text/javascript">
                try { ace.settings.loadState('sidebar') } catch (e) { }
            </script>
            
            <ul class="nav nav-list">
                <li class="<?php if($get_current_url_string == 'dashboard') { echo 'active'; } ?>">
                    <a href="<?php echo base_url(); ?>dashboard">
                        <i class="menu-icon fa fa-tachometer"></i>
                        <span class="menu-text"> Dashboard </span>
                    </a>
                    <b class="arrow"></b>
                </li>
                <li class="open <?php if($get_current_url_string == 'support/request' || $get_current_url_string == 'support/manage' || $get_first_segment == 'support') { echo 'active'; } ?>">
                    <a href="javascript:void0">
                        <i class="menu-icon fa fa-support"></i>
                        <span class="menu-text">Car</span>
                    </a>
                    <b class="arrow"></b>
                    <ul class="submenu">
                            <li class="<?php if($get_current_url_string == 'car/add') { echo 'active'; } ?>">
                                <a href="<?php echo base_url(); ?>car/add">
                                    <span class="menu-text"> Add New </span>
                                </a>
                                <b class="arrow"></b>
                            </li>
                            <li class="<?php if($get_current_url_string == 'car' || ( $get_first_segment == 'car' && $get_second_segment != 'add' )) { echo 'active'; } ?>">
                                <a href="<?php echo base_url(); ?>car">
                                    <span class="menu-text"> Manage </span>
                                </a>
                                <b class="arrow"></b>
                            </li>
                    </ul>
                </li>
            </ul><!-- /.nav-list -->

            <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
                <i id="sidebar-toggle-icon" class="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
            </div>
        </div>

        <div class="main-content">
            <div class="main-content-inner">
                