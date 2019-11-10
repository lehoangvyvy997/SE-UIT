@extends('admin.master-admin')
@section('title','Edit Category')

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
                        Sửa danh mục
                    </div>
                    <div class="panel-body">
                        <form method="post">
                            <div class="form-group">
                                <label>Tên danh mục:</label>
                                <input type="text" name="nameCate" value="{{$category->name}}" class="form-control" placeholder="Tên danh mục...">
                            </div>
                            <div class="form-group">
                                <input type="submit" name="name" value="Lưu" class="form-contro btn btn-primary" placeholder="Tên danh mục...">
                            </div>
                            <div class="form-group">
                                <a href="{{route('admin.category.get.list')}}" class="form-contro btn btn-danger">Hủy bỏ</a>
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
    </div><!--/.row-->
</div>	<!--/.main-->
@endsection