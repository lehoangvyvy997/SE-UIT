@extends('admin.master-admin')
@section('title','List Partners')

@section('content')
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Đối tác</h1>
			</div>
		</div><!--/.row-->
		
		<div class="row">
			<div class="col-xs-12 col-md-12 col-lg-12">
				
				<div class="panel panel-primary">
					<div class="panel-heading">Danh sách đối tác</div>
					<div class="panel-body">
						<div class="bootstrap-table">
							<div class="table-responsive">
								<a href="{{route('admin.partners.get.create')}}" class="btn btn-primary">Thêm đối tác</a>
								<table class="table table-bordered" style="margin-top:20px;">				
									<thead>
										<tr class="bg-primary">
											<th width="8%">Level</th>
											<th width="20%">Logo</th>
											<th width="20%">Tên đối tác</th>
											<th>Liên kết</th>
											<th width="15%">Tùy chọn</th>
										</tr>
									</thead>
									<tbody>
										@foreach($partners as $partner)
										<tr>
											<td>{{$partner->level}}</td>
											<td>
												<img width="100px" src="{{$partner->logo}}" class="thumbnail">
											</td>
											<td>{{$partner->name}}</td>
											<td><a href="{{$partner->url}}">{{$partner->url}}</a></td>
											<td>
												<a href="{{route('admin.partners.get.edit',$partner->id)}}" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
											</td>
										</tr>
										@endforeach
									</tbody>
								</table>							
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div><!--/.row-->
	</div>	<!--/.main-->
@endsection