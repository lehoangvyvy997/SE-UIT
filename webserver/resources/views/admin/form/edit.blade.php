@extends('admin.master-admin')
@section('title','Edit Form')
@section('js-javascript')
<script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
@endsection()

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
					<div class="panel-heading">Cập nhật biểu mẫu</div>
					<div class="panel-body">
						<form method="post" enctype="multipart/form-data">
							<div class="row" style="margin-bottom:40px">
								<div class="col-xs-8">
									<div class="form-group" >
										<label>Tiêu đề</label>
										<input value="{{$form->title}}"  type="text" name="titleForm" class="form-control">
                                    </div>
                                    <div class="form-group" >
										<label>Nội dung</label>
                                        <textarea class="ckeditor" name="contentForm" id="text" cols="30" rows="10">{{$form->content}}</textarea>
                                        <script>
                                            CKEDITOR.replace( 'contentForm', {
                                                filebrowserBrowseUrl: '{{ route('ckfinder_browser') }}',
                                            } );
                                        </script>
                                        @include('ckfinder::setup')
                                    </div>
									<div class="form-group" >
										<label>Thứ tự hiển thị</label>
										<input value="{{$form->level_show}}" name="levelForm" class="form-control">
									</div>
									<input type="submit" name="submit" value="Lưu thay đổi" class="btn btn-primary">
									<a href="{{route('admin.forms.get.list')}}" class="btn btn-danger">Hủy bỏ</a>
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
