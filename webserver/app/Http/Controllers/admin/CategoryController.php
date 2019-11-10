<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Category;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getList(){
        $categories = Category::all();
        return view('admin.category.list',['categories'=>$categories]);
    }

    public function getEdit($id){
        $category = Category::find($id);
        return view('admin.category.edit',['category'=>$category]);
    }
    public function postCreate(Request $request){
        $this -> validate($request,['nameCate' => 'required|max:200|unique:tb_categories,name'],
        [
            'nameCate.required' => 'Vui lòng nhập tên danh mục!',
            'nameCate.max' => 'Vui lòng nhập dưới 200 ký tự!',
            'nameCate.unique' => 'Tên đã bị trùng!',
        ]);
        $category = new Category;
        $category->name = $request->nameCate;
        $category->save();
        return back();
    }

    public function postEdit(Request $request, $id){
        $this -> validate($request,['nameCate' => 'required|max:200|unique:tb_categories,name'],
        [
            'nameCate.required' => 'Vui lòng nhập tên danh mục!',
            'nameCate.max' => 'Vui lòng nhập dưới 200 ký tự!',
            'nameCate.unique' => 'Tên đã bị trùng!',
        ]);

        $category = Category::find($id);
        $category->name = $request->nameCate;
        $category -> save();
        return redirect()->route('admin.category.get.list');
    }
}
