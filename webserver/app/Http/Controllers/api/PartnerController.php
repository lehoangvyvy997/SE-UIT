<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Partner;

class PartnerController extends Controller
{
    public function getIndex(){
        $partners = DB::table('tb_partners')
        ->orderBy('level')
        ->limit(20)
        ->get();
        if($partners){
            return response()->json($partners, 200);
        }
        return response()->json('null', 200);
    }

    public function getDetail($id){
        $partners = Partner::find($id);
        if($partners){
            return response()->json($partners, 200);
        }
        return response()->json('Not found', 200);
    }
}
