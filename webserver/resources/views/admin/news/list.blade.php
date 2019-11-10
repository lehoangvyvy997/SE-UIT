@extends('admin.master-admin')
@section('title','List News')

@section('content')
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Bài viết</h1>
			</div>
		</div><!--/.row-->
		
		<div class="row">
			<div class="col-xs-12 col-md-12 col-lg-12">
				
				<div class="panel panel-primary">
					<div class="panel-heading">Danh sách bài viết</div>
					<div class="panel-body">
						<div class="bootstrap-table">
							<div class="table-responsive">
								<a href="{{route('admin.news.get.create')}}" class="btn btn-primary">Thêm bài viết</a>
								<table class="table table-bordered" style="margin-top:20px;">				
									<thead>
										<tr class="bg-primary">
											<th width="30%"> Tiêu đề</th>
											<th width="25%"> Danh mục</th>
											<th> Ngày tạo</th>
											<th> Hiển thị</th>
											<th>Tùy chọn</th>
										</tr>
									</thead>
									<tbody>
										@foreach($data as $news)
											<td>{{$news->title}}</td>
											<td>{{$news->cate_name}}</td>
											<td>{{$news->created_at_news}}</td>
											<td>
												@if($news->hidden==1)<span class="badge">Hiển thị</span>@endif
												@if($news->hidden==0)<span class="badge">Không hiển thị</span>@endif
											</td>
											<td>
												<a href="{{route('admin.news.get.edit',$news->id)}}" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
												<a href="{{route('admin.news.get.detail',$news->id)}}" class="btn btn-primary"><i class="fa fa-trash" aria-hidden="true"></i> xem</a>
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