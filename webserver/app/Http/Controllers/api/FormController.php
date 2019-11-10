<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Form;

class FormController extends Controller
{
    public function getIndex(){
        $forms = DB::table('tb_forms')->orderBy('level_show')->limit(20)->get();
        if($forms){
            return response()->json($forms, 200);
        }
        return response()->json('Null', 200);
        
    }

    public function getDetail($id){
        $forms = Form::find($id);
        if($forms){
            return response()->json($forms, 200);
        }
        return response()->json('Not found', 200);
    }
}
