@extends('admin.master-admin')
@section('title','List category')

@section('content')
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Danh mục bài viết</h1>
			</div>
		</div><!--/.row-->
		
		<div class="row">
			<div class="col-xs-12 col-md-5 col-lg-5">
					<div class="panel panel-primary">
						<div class="panel-heading">
							Thêm danh mục
						</div>
						<div class="panel-body">
							<form method="post">
								<div class="form-group">
									<label>Tên danh mục:</label>
									<input type="text" name="nameCate" class="form-control" placeholder="Tên danh mục...">
								</div>
								
								<div class="form-group">
									<input type="submit" name="submit" class="form-contro btn btn-primary" placeholder="123..." value="Thêm mới"></input>
								</div>
								{{csrf_field()}}
							</form>
							@if (count($errors) > 0)
							<div class="alert alert-danger span8">
								<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
								@foreach ($errors->all() as $error)
									{{ $error }}<br>
								@endforeach
							</div>
							@endif
							@if (session('error'))
								<div class="alert alert-danger">
									{{ session('error') }}
								</div>
							@endif
							
						</div>
					</div>
			</div>
			<div class="col-xs-12 col-md-7 col-lg-7">
				<div class="panel panel-primary">
					<div class="panel-heading">Danh sách danh mục</div>
					<div class="panel-body">
						<div class="bootstrap-table">
							<table class="table table-bordered">
				              	<thead>
					                <tr class="bg-primary">
					                  <th>Tên danh mục</th>
					                  <th style="width:30%">Tùy chọn</th>
					                </tr>
				              	</thead>
				              	<tbody>
								@foreach($categories as $category)
									<tr>
										<td>{{$category->name}}</td>
										<td>
											<a href="{{route('admin.category.get.edit',$category->id)}}" class="btn btn-warning"><span class="glyphicon glyphicon-edit"></span> Sửa</a>
										</td>
									</tr>
								@endforeach
				                </tbody>
				            </table>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div><!--/.row-->
	</div>	<!--/.main-->
@endsection