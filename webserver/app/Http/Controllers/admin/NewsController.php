<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\News;
use App\Category;

class NewsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function getList(){
        $data = DB::table('tb_news')->join('tb_categories','tb_news.id_cate','=','tb_categories.id')
                    ->select('tb_news.id', 'tb_news.title','tb_news.content','tb_news.hidden','tb_news.created_at as created_at_news','tb_categories.name as cate_name')
                    ->orderBy('tb_news.id', 'desc')
                    ->limit(50)
                    ->get();
        //dd($data);
        return view('admin.news.list',['data'=>$data]);
    }

    public function getCreate(){
        $categories = Category::all();
        return view('admin.news.create',['categories'=>$categories]);
    }

    public function getEdit($id){
        $news = News::find($id);
        $categories = Category::all();
        return view('admin.news.edit',['news'=>$news,'categories'=>$categories]);
    }
    public function getDetail($id){
        $news = DB::table('tb_news')->join('tb_categories','tb_news.id_cate','=','tb_categories.id')
                    ->select('tb_news.id', 'tb_news.title','tb_news.content','tb_news.hidden','tb_news.created_at as created_at_news','tb_categories.name as cate_name')
                    ->where('tb_news.id',$id)->first();
        //$news = News::find($id);
        //dd($news);
        return view('admin.news.detail',['news'=>$news]);
    }

    public function postCreate(Request $request){

        // if(isset($request->submit_preview)){
        //     dd('Xem trước');
        // }
        if(isset($request->submit_save)){
            //dd('Thêm mới');
            $this->validate($request, [
                'titleNews' => 'required|max:200|unique:tb_News,title',
                'contentNews'  => 'required',
            ],
            [
                'titleNews.required' => 'Vui lòng nhập tiêu đề!',
                'titleNews.max' => 'Tiêu đề nhập dưới 200 ký tự!',
                'titleNews.unique' => 'Tiêu đề đã bị trùng!',
                'contentNews.required' => 'Vui lòng nhập nội dung!',
            ]);

            $news = new News;
            $news->title = $request->titleNews;
            $news->id_cate = $request->idcateNews;
            $news->hidden = $request->hiddenNews;
            $news->content = $request->contentNews;
            $news->save();
            return redirect()->route('admin.news.get.list');
        }
        return 'Error';
    }

    public function postEdit(Request $request,$id){
        $news = News::find($id);
        // if(isset($request->submit_preview)){
        //     dd('Xem trước');
        // }
        if(isset($request->submit_save)){
            //dd('Thêm mới');
            $this->validate($request, [
                'titleNews' => 'required|max:200|unique:tb_News,title,'.request()->segment(4).'.id',
                'contentNews'  => 'required',
            ],
            [
                'titleNews.required' => 'Vui lòng nhập tiêu đề!',
                'titleNews.max' => 'Tiêu đề nhập dưới 200 ký tự!',
                'titleNews.unique' => 'Tiêu đề đã bị trùng!',
                'contentNews.required' => 'Vui lòng nhập nội dung!',
            ]);
            $news->title = $request->titleNews;
            $news->id_cate = $request->idcateNews;
            $news->hidden = $request->hiddenNews;
            $news->content = $request->contentNews;
            $news->save();
            return redirect()->route('admin.news.get.list');
        }
        return 'Error';
    }
}
