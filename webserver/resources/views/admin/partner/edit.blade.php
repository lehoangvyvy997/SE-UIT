@extends('admin.master-admin')
@section('title','Edit Partner')

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
					<div class="panel-heading">Thêm mới đối tác</div>
					<div class="panel-body">
						<form method="post" enctype="multipart/form-data">
							<div class="row" style="margin-bottom:40px">
								<div class="col-xs-8">
									<div class="form-group" >
										<label>Tên đối tác</label>
										<input  type="text" name="namePartner" value="{{$partner->name}}" class="form-control">
                                    </div>
                                    <div class="form-group" >
                                        <label>Logo đối tác</label>
                                        <input type='file' value="{{$partner->logo}}" name="select_file"/>
									</div>
									<div class="form-group" >
										<label>Level</label>
										<input name="levelPartner" value="{{$partner->level}}" class="form-control">
									</div>
									<div class="form-group" >
										<label>Liên kết đối tác</label>
										<input type="url" value="{{$partner->url}}" name="urlPartner" class="form-control">
                                    </div>
									<input type="submit" name="submit" value="Lưu thay đổi" class="btn btn-primary">
									<a href="{{route('admin.partners.get.list')}}" class="btn btn-danger">Hủy bỏ</a>
								</div>
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
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div><!--/.row-->
	</div>	<!--/.main-->

@endsection()
