@extends('admin.master-admin')
@section('title',$news->title)

@section('content')
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">		
	<div class="row">
		<div class="col-lg-12">
			<h1 class="page-header">{{$news->title}}</h1>
			<?php echo $news->content ?>
		</div>
	</div><!--/.row-->
</div>	<!--/.main-->
@endsection