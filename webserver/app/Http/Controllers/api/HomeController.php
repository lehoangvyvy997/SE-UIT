<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\News;
use App\Category;


class HomeController extends Controller
{
    
    public function getIndex(){
        $news_1 = DB::table('tb_news')
        ->where('id_cate',2)
        ->orderBy('id', 'desc')
        ->limit(6)
        ->get()
        ->toArray();
        $news_1 = Category::all();
        return json_encode($news_1, JSON_UNESCAPED_UNICODE);
    }
    
    public function getDetail($id){
        $cate = Category::find($id);
        return json_encode($cate, JSON_UNESCAPED_UNICODE);
    }
}
