@extends('admin.master-admin')
@section('title','List Users')

@section('content')
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Tài khoản</h1>
			</div>
		</div><!--/.row-->
		
		<div class="row">
			<div class="col-xs-12 col-md-12 col-lg-12">
				
				<div class="panel panel-primary">
					<div class="panel-heading">Danh sách tài khoản</div>
					<div class="panel-body">
						<div class="bootstrap-table">
							<div class="table-responsive">
								<a href="#" class="btn btn-primary">Thêm tài khoản</a>
								<table class="table table-bordered" style="margin-top:20px;">				
									<thead>
										<tr class="bg-primary">
											<th>ID</th>
											<th width="30%">Tên Sản phẩm</th>
											<th>Giá sản phẩm</th>
											<th width="20%">Ảnh sản phẩm</th>
											<th>Danh mục</th>
											<th>Tùy chọn</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>iPhone 7 Plus 32GB quốc tế Mate Black</td>
											<td>21.990.000 VND</td>
											<td>
												<img width="200px" src="img/iphone7-plus-black-select-2016.jpg" class="thumbnail">
											</td>
											<td>iPhone</td>
											<td>
												<a href="#" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
												<a href="#" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
											</td>
										</tr>
										<tr>
											<td>2</td>
											<td>iPhone 7 Plus 32GB quốc tế Mate Black</td>
											<td>21.990.000 VND</td>
											<td>
												<img width="200px" src="img/iphone7-plus-black-select-2016.jpg" class="thumbnail">
											</td>
											<td>iPhone</td>
											<td>
												<a href="#" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
												<a href="#" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
											</td>
										</tr>
										<tr>
											<td>3</td>
											<td>iPhone 7 Plus 32GB quốc tế Mate Black</td>
											<td>21.990.000 VND</td>
											<td>
												<img width="200px" src="img/iphone7-plus-black-select-2016.jpg" class="thumbnail">
											</td>
											<td>iPhone</td>
											<td>
												<a href="#" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
												<a href="#" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
											</td>
										</tr>
										<tr>
											<td>4</td>
											<td>iPhone 7 Plus 32GB quốc tế Mate Black</td>
											<td>21.990.000 VND</td>
											<td>
												<img width="200px" src="img/iphone7-plus-black-select-2016.jpg" class="thumbnail">
											</td>
											<td>iPhone</td>
											<td>
												<a href="#" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
												<a href="#" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
											</td>
										</tr>
										<tr>
											<td>5</td>
											<td>iPhone 7 Plus 32GB quốc tế Mate Black</td>
											<td>21.990.000 VND</td>
											<td>
												<img width="200px" src="img/iphone7-plus-black-select-2016.jpg" class="thumbnail">
											</td>
											<td>iPhone</td>
											<td>
												<a href="#" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
												<a href="#" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
											</td>
										</tr>
										<tr>
											<td>6</td>
											<td>iPhone 7 Plus 32GB quốc tế Mate Black</td>
											<td>21.990.000 VND</td>
											<td>
												<img width="200px" src="img/iphone7-plus-black-select-2016.jpg" class="thumbnail">
											</td>
											<td>iPhone</td>
											<td>
												<a href="#" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
												<a href="#" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Xóa</a>
											</td>
										</tr>
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