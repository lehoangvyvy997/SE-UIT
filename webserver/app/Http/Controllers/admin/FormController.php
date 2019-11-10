<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Form;

class FormController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function getList(){
        $forms = DB::table('tb_forms')
                    ->orderBy('level_show')
                    ->limit(20)
                    ->get();
        return view('admin.form.list',['forms'=>$forms]);
    }

    public function getCreate(){
        return view('admin.form.create');
    }

    public function getEdit($id){
        $form = Form::find($id);
        return view('admin.form.edit',['form'=>$form]);
    }

    public function getDetail($id){
        $form = Form::find($id);
        return view('admin.form.form-detail',['form'=>$form]);
    }
    public function postEdit(Request $request,$id){
        $this->validate($request, [
            'titleForm' => 'required|max:200|unique:tb_forms,title,'.request()->segment(4).',id',
            'contentForm'  => 'required',
            'levelForm' => 'required|numeric',
        ],
        [
            'titleForm.required' => 'Vui lòng nhập tiêu đề!',
            'titleForm.max' => 'Tiêu đề nhập dưới 200 ký tự!',
            'titleForm.unique' => 'Tiêu đề đã bị trùng!',
            'contentForm.required' => 'Vui lòng nhập nội dung!',
            'levelForm.required' => 'Vui lòng nhập mức hiển thị!',
            'levelForm.numeric' => 'Vui lòng nhập level ở dạng số!',
        ]);

        $form = Form::find($id);

        $form->title = $request->titleForm;
        $form->content = $request->contentForm;
        $form->level_show = $request->levelForm;
        $form->save();
        return redirect()->route('admin.forms.get.list');
    }

    public function postCreate(Request $request){
        $this->validate($request, [
            'titleForm' => 'required|max:200|unique:tb_forms,title',
            'contentForm'  => 'required',
            'levelForm' => 'required|numeric',
        ],
        [
            'titleForm.required' => 'Vui lòng nhập tiêu đề!',
            'titleForm.max' => 'Tiêu đề nhập dưới 200 ký tự!',
            'titleForm.unique' => 'Tiêu đề đã bị trùng!',
            'contentForm.required' => 'Vui lòng nhập nội dung!',
            'levelForm.required' => 'Vui lòng nhập mức hiển thị!',
            'levelForm.numeric' => 'Vui lòng nhập level ở dạng số!',
        ]);

        $form = new Form;

        $form->title = $request->titleForm;
        $form->content = $request->contentForm;
        $form->level_show = $request->levelForm;
        $form->save();
        return redirect()->route('admin.forms.get.list');
    }
}
