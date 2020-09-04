<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Upload;
use App\ContentOrder;

class ContentController extends Controller
{
    public function uploadFiles(Request $request){
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
    public function submitContentOrder(Request $request){

      $request_order = ContentOrder::create([
        'content_type'=>$request->contentType,
        'workflow_type'=>$request->workflowType,
        'language'=>$request->language,
        'amount_of_words'=>$request->words,
        'urgency'=>$request->deliveryTime,
        'amount_paid'=>$request->amountPaid,
        'instructions'=>$request->instructions,
        'upload_id'=>$request->upload_id,
        'user_id'=>$request->user_id,

      ]);

      if($request->upload_id){
         
      Upload::where('id',$request->upload_id)->update([
        'content_order_id'=>$request_order->id,
        'user_id'=>$request->user_id
      ]);
      }

    }
    public function getContentOrders(){
       $content_orders =ContentOrder::orderBy('id','DESC')->with('user','upload')->get();
       return response()->json($content_orders); 
    }
}
