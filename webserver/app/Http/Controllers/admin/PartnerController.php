<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Partner;

class PartnerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function getList(){
        $partners = DB::table('tb_partners')
                    ->orderBy('level')
                    ->limit(20)
                    ->get();
        return view('admin.partner.list',['partners'=>$partners]);
    }

    public function getCreate(){
        return view('admin.partner.create');
    }

    public function postCreate(Request $request){
        $this->validate($request, [
            'namePartner' => 'required|max:200|unique:tb_partners,name',
            'select_file'  => 'required|image|mimes:jpg,png,gif|max:2048',
            'levelPartner' => 'required|numeric|max:100|unique:tb_partners,level',
            'urlPartner' => 'required',
        ],
        [
            'namePartner.required' => 'Vui lòng nhập tên đối tác!',
            'namePartner.max' => 'Vui lòng nhập dưới 200 ký tự!',
            'namePartner.unique' => 'Tên đã bị trùng!',
            'select_file.required' => 'Vui lòng chọn logo đối tác!',
            'select_file.image' => 'Vui lòng chọn tệp hình ảnh!',
            'select_file.max' => 'Vui lòng chọn file có dung lượng nhỏ!',
            'levelPartner.required' => 'Vui lòng nhập level đối tác!',
            'levelPartner.numeric' => 'Vui lòng nhập level đối tác dạng số!',
            'levelPartner.unique' => 'Level đã tồn tại!',
            'urlPartner.required' => 'Vui lòng nhập liên kết đối tác!',
        ]);

        $partner = new Partner;
        $image = $request->file('select_file');

        // rename image
        $fileName = rand(0, 9) . rand(10, 99) . rand(100, 999) . rand(1000, 9999) . '-' . $image->getClientOriginalName();
        $filePath = 'http://se.uit.edu.xyz/userfiles/images-partner/' . $fileName;
        
        // move image up server
        $image->move(public_path('userfiles/images-partner'), $fileName);
        
        $partner->name = $request->namePartner;
        $partner->logo = $filePath;
        $partner->level = $request->levelPartner;
        $partner->url = $request->urlPartner;
        $partner->save();
        return redirect()->route('admin.partners.get.list');
    }
    public function getEdit($id){
        $partner = Partner::find($id);
        //dd($partner);
        return view('admin.partner.edit',['partner'=>$partner]);
    }

    public function postEdit(Request $request,$id){
        $this->validate($request, [
            'namePartner' => 'required|max:200|unique:tb_partners,name,'.request()->segment(4).',id',
            'select_file'  => 'image|max:2048',
            'levelPartner' => 'required|numeric|max:100|unique:tb_partners,level,'.request()->segment(4).',id',
            'urlPartner' => 'required',
        ],
        [
            'namePartner.required' => 'Vui lòng nhập tên đối tác!',
            'namePartner.max' => 'Vui lòng nhập dưới 200 ký tự!',
            'namePartner.unique' => 'Tên đã bị trùng!',
            'select_file.image' => 'Vui lòng chọn tệp hình ảnh!',
            'select_file.max' => 'Vui lòng chọn file có dung lượng nhỏ!',
            'levelPartner.required' => 'Vui lòng nhập level đối tác!',
            'levelPartner.numeric' => 'Vui lòng nhập level đối tác dạng số!',
            'levelPartner.unique' => 'Level đã tồn tại!',
            'urlPartner.required' => 'Vui lòng nhập liên kết đối tác!',
        ]);

        $partner = Partner::find($id);
        if($request->file('select_file')){
            $image = $request->file('select_file');
            // rename image
            $fileName = rand(0, 9) . rand(10, 99) . rand(100, 999) . rand(1000, 9999) . '-' . $image->getClientOriginalName();
            $filePath = 'http://se.uit.edu.xyz/userfiles/images-partner/' . $fileName;
            // move image up server
            $image->move(public_path('userfiles/images-partner'), $fileName);
            $partner->logo = $filePath;
        }
        
        $partner->name = $request->namePartner;
        $partner->level = $request->levelPartner;
        $partner->url = $request->urlPartner;
        $partner->save();
        return redirect()->route('admin.partners.get.list');
    }

}


