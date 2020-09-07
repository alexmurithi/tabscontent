<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\AcademicService;
use App\AcademicCategory;
use App\AcademicLanguage;
use App\AcademicPaperformat;
use App\AcademicUrgency;
use App\AcademicSpacing;
use App\AcademicEdulevel;
use App\Upload;

class AcademicController extends Controller
{
   public function services(){
       $services =AcademicService::orderBy('name')->get();

       return response()->json($services);
   }

   public function categories(){
   $categories =AcademicCategory::orderBy('category')->get();

    return response()->json($categories);
   }
   public function languages(){
    $languages =AcademicLanguage::orderBy('language')->get();
 
     return response()->json($languages);
    }

    public function paperformats(){
        $paperformats =AcademicPaperformat::orderBy('paper_format')->get();
     
         return response()->json($paperformats);
    }

    public function spacing(){
        $spacing =AcademicSpacing::orderBy('spacing')->get();
     
         return response()->json($spacing);
    }

    public function urgency(){
        $urgency =AcademicUrgency::orderBy('urgency')->get();
     
         return response()->json($urgency);
    }

    public function edulevels(){
        $edulevels =AcademicEdulevel::orderBy('edulevel')->get();
     
         return response()->json($edulevels);
    }

    public function uploadFile(Request $request){
        $this->validate($request,[
          'file'=>'required|mimes:jpeg,jpg,pdf,png,docx'
    
        ]);
  
        if($file =$request->file){
          $name =$file->getClientOriginalName();
          $file->move(public_path('uploads/content'),$name);
  
          $upload =Upload::create([
            'file'=>$name
          ]);
          
  
          return $upload;
        }
      }

        
}
