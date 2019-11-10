@extends('admin.master-admin')
@section('title','List Forms')

@section('content')
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Biểu mẫu</h1>
			</div>
		</div><!--/.row-->
		
		<div class="row">
			<div class="col-xs-12 col-md-12 col-lg-12">
				
				<div class="panel panel-primary">
					<div class="panel-heading">Danh sách biểu mẫu</div>
					<div class="panel-body">
						<div class="bootstrap-table">
							<div class="table-responsive">
								<a href="{{route('admin.forms.get.create')}}" class="btn btn-primary">Thêm biểu mẫu</a>
								<table class="table table-bordered" style="margin-top:20px;">				
									<thead>
										<tr class="bg-primary">
											<th>Mức hiển thị</th>
											<th width="30%">Tiêu đề</th>
											<th>Thời gian được tạo</th>
											<th>Tùy chọn</th>
										</tr>
									</thead>
									<tbody>
									@foreach($forms as $form)
										<tr>
											<td>{{$form->level_show}}</td>
											<td>{{$form->title}}</td>
											<td>{{$form->created_at}}</td>
											<td>
												<a href="{{route('admin.forms.get.detail',$form->id)}}" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Xem</a>
												<a href="{{route('admin.forms.get.edit',$form->id)}}" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
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