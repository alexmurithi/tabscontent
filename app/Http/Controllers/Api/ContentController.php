<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Upload;

class ContentController extends Controller
{
    public function uploadFiles(Request $request){
      $this->validate($request,[
        'file'=>'required|mimes:jpeg,jpg,pdf,png,docx'
  
      ]);

      if($file =$request->file){
        $name =time().$file->getClientOriginalName();
        $file->move(public_path('uploads/content'),$name);

        $upload =Upload::create([
          'file'=>$name
        ]);
        

        return $upload;
      }
    }
}
