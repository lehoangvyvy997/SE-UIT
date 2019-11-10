@extends('admin.master-admin')
@section('title','Edit Post')
@section('js-javascript')
<script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
@endsection()

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
					<div class="panel-heading">Cập nhật bài viết</div>
					<div class="panel-body">
						<form method="post" enctype="multipart/form-data">
							<div class="row" style="margin-bottom:40px">
								<div class="col-xs-8">
									<div class="form-group" >
										<label>Tiêu đề</label>
										<input value="{{$news->title}}" type="text" name="titleNews" class="form-control">
                                    </div>
                                    <div class="form-group" >
										<label>Danh mục</label>
										<select required name="idcateNews" class="form-control">
                                            @foreach($categories as $cate)
                                                <option value="{{$cate->id}}" @if($cate->id==$news->id_cate)selected @endif()>{{$cate->name}}</option>
											@endforeach
					                    </select>
									</div>
                                    <div class="form-group" >
										<label>Nội dung</label>
                                        <textarea class="ckeditor" name="contentNews" id="text" cols="30" rows="10">{{$news->content}}</textarea>
                                        <script>
                                            CKEDITOR.replace( 'contentNews', {
                                                filebrowserBrowseUrl: '{{ route('ckfinder_browser') }}',
                                            } );
                                        </script>
                                        @include('ckfinder::setup')
                                    </div>
                                    <div class="form-group" >
										<label>Hiển thị</label>
										<select required name="hiddenNews" class="form-control">
                                            <option value="1" @if($news->hidden==1) selected  @endif>Hiển thị</option>
                                            <option value="0" @if($news->hidden==0) selected  @endif>Không hiển thị</option>
					                    </select>
									</div>
									<input type="submit" name="submit_save" value="Lưu thay đổi" class="btn btn-primary">
                                    <a href="{{route('admin.news.get.list')}}" class="btn btn-danger">Hủy bỏ</a>
                                    <!-- <input type="submit" name="submit_preview" value="Xem trước" class="btn btn-info"> -->
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
@section('script')
@endsection()

