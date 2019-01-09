<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8" />
    <title>Ventive</title>
    <!-- bootstrap & fontawesome -->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/font-awesome/4.5.0/css/font-awesome.min.css" />

    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/jquery-ui.custom.min.css" />
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/jquery.gritter.min.css" />
    <!-- text fonts -->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/fonts.googleapis.com.css" />
    <!-- ace styles -->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace.min.css" />
    <!--[if lte IE 9]>
        <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace-part2.min.css" />
    <![endif]-->
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace-rtl.min.css" />
    
    <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/custom.css" />

    <!--[if lte IE 9]>
      <link rel="stylesheet" href="<?php echo  base_url(); ?>assets/css/ace-ie.min.css" />
    <![endif]-->
    <!-- HTML5shiv and Respond.js for IE8 to support HTML5 elements and media queries -->
    <!--[if lte IE 8]>
    <script src="<?php echo  base_url(); ?>assets/js/html5shiv.min.js"></script>
    <script src="<?php echo  base_url(); ?>assets/js/respond.min.js"></script>
    <![endif]-->
	<script src="<?php echo  base_url(); ?>assets/js/set.js"></script>
    <script type="text/javascript">
        var baseUrl = <?php echo '"'.base_url().'"'; ?>
    </script>
</head>
<body class="login-layout light-login">
    <div class="main-container">
        <div class="main-content">
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1">
                    <div class="login-container">
                        <div class="center">
                            <h1>
                                <span class="red">ventive</span>
                            </h1>
                        </div>

                        <div class="space-6"></div>

                        <div class="position-relative">
                            <div id="login-box" class="login-box visible widget-box no-border">
                                <div class="widget-body">
                                    <div class="widget-main">
                                        <h4 class="header blue lighter bigger">
                                            <i class="ace-icon fa fa-lock green"></i>
                                            Please Enter Your Credential
                                        </h4>

                                        <div class="space-6"></div>

                                        <form class="loginForm">
                                            <fieldset>
                                                <label class="block clearfix">
                                                    <span class="block input-icon input-icon-right">
                                                        <input type="email" id="txtcusername" class="form-control" maxlength="40" placeholder="Email" required />
                                                        <i class="ace-icon fa fa-user"></i>
                                                    </span>
                                                </label>

                                                <label class="block clearfix">
                                                    <span class="block input-icon input-icon-right">
                                                        <input type="password" id="txtcpassword" class="form-control" maxlength="25" placeholder="Password" required />
                                                        <i class="ace-icon fa fa-lock"></i>
                                                    </span>
                                                </label>

                                                <div class="space"></div>

                                                <div class="clearfix">
                                                    <button type="button" class="width-35 pull-right btn btn-sm btn-primary" id="btnlogin">
                                                        <i class="ace-icon fa fa-key"></i>
                                                        <span class="bigger-110">Login</span>
                                                    </button>
                                                </div>

                                                <div class="space-4"></div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- basic scripts -->
    <!--[if !IE]> -->
    <script src="<?php echo  base_url(); ?>assets/js/jquery-2.1.4.min.js"></script>
    <!-- <![endif]-->
    <!--[if IE]>
    <script src="<?php echo  base_url(); ?>assets/js/jquery-1.11.3.min.js"></script> Dark
    <![endif]-->
    <!--[if lte IE 8]>
          <script src="<?php echo  base_url(); ?>assets/js/excanvas.min.js"></script>
        <![endif]-->
    <script src="<?php echo  base_url(); ?>assets/js/jquery-ui.custom.min.js"></script>
    <script src="<?php echo  base_url(); ?>assets/js/jquery.ui.touch-punch.min.js"></script>
    <script src="<?php echo  base_url(); ?>assets/js/jquery.gritter.min.js"></script>
    <script src="<?php echo  base_url(); ?>assets/js/custom.js"></script>
</body>
</html>
