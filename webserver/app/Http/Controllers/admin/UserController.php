<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function getList(){
        return view('admin.user.list');
    }

    public function getCreate(){
        return view('admin.user.create');
    }

    public function getEdit($id){
        return view('admin.user.edit');
    }
}
