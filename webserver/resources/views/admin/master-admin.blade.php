<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    <!-- /. css-->
    <link type="text/css" href="{{ asset('bo/css/bootstrap.min.css')}}" rel="stylesheet">
    <link type="text/css" href="{{ asset('bo/css/datepicker3.css')}}" rel="stylesheet">
	<link type="text/css" href="{{ asset('bo/css/styles.css')}}" rel="stylesheet">
	@yield('css-stylesheet')
    <!-- /. js-->
    <script type="text/javascript" href="{{ asset('ckeditor/ckeditor.js')}}"></script>
	<script href="{{ asset('bo/js/lumino.glyphs.js')}}"></script>
	@yield('js-javascript')

</head>
<body>
	<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">SE-UIT</a>
				<ul class="user-menu">
					<li class="dropdown pull-right">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><svg class="glyph stroked male-user"><use xlink:href="#stroked-male-user"></use></svg> User <span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="#"><svg class="glyph stroked cancel"><use xlink:href="#stroked-cancel"></use></svg> Logout</a></li>
						</ul>
					</li>
				</ul>
			</div>
							
		</div><!-- /.container-fluid -->
	</nav>
		
	<div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
		<ul class="nav menu">
			<li role="presentation" class="divider"></li>
			<li class="active"><a href="{{route('admin.home.get.index')}}"><svg class="glyph stroked dashboard-dial"><use xlink:href="#stroked-dashboard-dial"></use></svg> Home</a></li>
			<li><a href="{{route('admin.category.get.index')}}"><svg class="glyph stroked calendar"><use xlink:href="#stroked-calendar"></use></svg> Category</a></li>
			<li><a href="{{route('admin.news.get.index')}}"><svg class="glyph stroked line-graph"><use xlink:href="#stroked-line-graph"></use></svg> Posts</a></li>
			<li><a href="{{route('admin.forms.get.index')}}"><svg class="glyph stroked line-graph"><use xlink:href="#stroked-line-graph"></use></svg> Forms</a></li>
			<li><a href="{{route('admin.partners.get.index')}}"><svg class="glyph stroked line-graph"><use xlink:href="#stroked-line-graph"></use></svg> Partners</a></li>
			<li><a href="{{route('admin.users.get.index')}}"><svg class="glyph stroked line-graph"><use xlink:href="#stroked-line-graph"></use></svg> Users</a></li>
			<li role="presentation" class="divider"></li>
		</ul>
		
	</div><!--/.sidebar-->
		
	@yield('content')

    <script href="{{ asset('bo/js/jquery-1.11.1.min.js')}}"></script>
    <script href="{{ asset('bo/js/bootstrap.min.js')}}"></script>
    <script href="{{ asset('bo/js/chart.min.js')}}"></script>
    <script href="{{ asset('bo/js/chart-data.js')}}"></script>
    <script href="{{ asset('bo/js/easypiechart.js')}}"></script>
    <script href="{{ asset('bo/js/easypiechart-data.js')}}"></script>
    <script href="{{ asset('bo/js/bootstrap-datepicker.js')}}"></script>
	<script>
		$('#calendar').datepicker({
		});

		!function ($) {
		    $(document).on("click","ul.nav li.parent > a > span.icon", function(){          
		        $(this).find('em:first').toggleClass("glyphicon-minus");      
		    }); 
		    $(".sidebar span.icon").find('em:first').addClass("glyphicon-plus");
		}(window.jQuery);

		$(window).on('resize', function () {
		  if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
		})
		$(window).on('resize', function () {
		  if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
		})
	</script>
	@yield('script')	
</body>

</html>
