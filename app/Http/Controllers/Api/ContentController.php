<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Upload;
use App\ContentOrder;
use App\ContentLevel;
use App\ContentDetail;

use App\BlogBasic;

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
      
       $latestOrder =ContentOrder::orderBy('created_at','DESC')->first();

      $request_order = ContentOrder::create([
        'content_type'=>$request->contentType,
        'workflow_type'=>$request->workflowType,
        'language'=>$request->language,
        'amount_of_words'=>$request->words,
        'urgency'=>$request->deadline,
        'amount_paid'=>$request->amountPaid,
        'instructions'=>$request->instructions,
        'upload_id'=>$request->upload_id,
        'user_id'=>$request->user_id,
        // 'order_id' => '#'.str_pad($latestOrder->id + 1, 8, "0", STR_PAD_LEFT),
        'order_id'=>'#ORDR'.'_'.$request->user_id.'_'.str_pad($latestOrder->id+1,3,"0",STR_PAD_LEFT),

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

    
    public function getUserOrders($id){
      $user_orders =ContentOrder::where('user_id',$id)->orderBy('created_at','DESC')->get();
      return response()->json($user_orders);
    }

    public function getContentDetails(){
      $details =ContentLevel::orderBy('id','ASC')->get();
      return response()->json($details);
    }

    public function getContentPricing(){
      $pricing =ContentDetail::orderBy('id','ASC')->with('contentLevel')->get();
      return response()->json($pricing);
    }

    public function blogBasics(){
      $blog_basics =BlogBasic::orderBy('words','ASC')->get();
      return response()->json($blog_basics);
    }
}
