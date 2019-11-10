<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\News;

class NewsController extends Controller
{
    public function getIndex($id){
        // SKNB Sự kiện nổi bật
        // TBHV Thông báo học vụ
        // HB-TD Học hổng - Tuyển dụng
        // KH-CN Khoa học - Công nghệ
        // GT Giới thiệu
        // LH Liên hệ
        switch($id){
            case 'SKNB':{
                $news = DB::table('tb_news')->where('id_cate',2)->orderBy('id','desc')->limit(3)->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
                break;
            }
            case 'TBHV':{
                $news = DB::table('tb_news')->where('id_cate',3)->orderBy('id','desc')->limit(3)->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
                break;
            }
            case 'HB-TD':{
                $news = DB::table('tb_news')->where('id_cate',4)->orderBy('id','desc')->limit(3)->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
                break;
            }
            case 'KH-CN':{
                $news = DB::table('tb_news')->where('id_cate',5)->orderBy('id','desc')->limit(3)->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
                break;
            }
            case 'GT':{
                $news = DB::table('tb_news')->where('id_cate',6)->orderBy('id','desc')->limit(3)->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
                break;
            }
            case 'LH':{
                $news = DB::table('tb_news')->where('id_cate',7)->orderBy('id','desc')->limit(3)->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
                break;
            }
        }
        return response()->json('Not found', 404);
    }

    public function getDetail($id){
        $news = News::find($id);
        if($news){
            return response()->json($news, 200);    
        }
        return response()->json('Not found', 404);
    }

    public function getCateGroup($id){
        // SKNB Sự kiện nổi bật
        // TBHV Thông báo học vụ
        // HB-TD Học hổng - Tuyển dụng
        // KH-CN Khoa học - Công nghệ
        // GT Giới thiệu
        // LH Liên hệ
        switch($id){
            case 'SKNB':{
                $news = DB::table('tb_news')->where('id_cate',2)->orderBy('id','desc')->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
                break;
            }
            case 'TBHV':{
                $news = DB::table('tb_news')->where('id_cate',3)->orderBy('id','desc')->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
            }
            case 'HB-TD':{
                $news = DB::table('tb_news')->where('id_cate',4)->orderBy('id','desc')->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
            }
            case 'KH-CN':{
                $news = DB::table('tb_news')->where('id_cate',5)->orderBy('id','desc')->get();
                if($news){
                    return response()->json($news, 200);
                }
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
            }
            case 'GT':{
                $news = DB::table('tb_news')->where('id_cate',6)->orderBy('id','desc')->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
            }
            case 'LH':{
                $news = DB::table('tb_news')->where('id_cate',7)->orderBy('id','desc')->get();
                if($news){
                    return response()->json($news, 200);
                }
                return response()->json('Null', 200);
            }
        }
        return response()->json('Not found', 404);
    }

}
