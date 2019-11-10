<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Category;

class CategoryController extends Controller
{
    public function getIndex(){
        $category = Category::all();
        return response()->json($category, 200);
    }

    public function getDetail($id){
        $category = Category::find($id);
        if($category){
            return response()->json($category, 200);
        }
        return response()->json('Not found', 200);
    }
}
