<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Language;
use App\ContentType;
use App\WorkType;
use App\WordsCount;
use App\ContentDelivery;
use App\ContentPrice;
class AdminController extends Controller
{
    public function getUsers(){
      $users =User::orderBy('id','ASC')->with('role')->get();

      return response()->json($users);
    }

    public function getLanguages(){
      $languages =Language::orderBy('id','ASC')->get();
      return response()->json($languages);
    }

    public function getContentTypes(){
      $content_types =ContentType::orderBy('id','ASC')->get();
      return response()->json($content_types);
    }

    public function getWorkFlows(){
      $work_flow_types =WorkType::orderBy('id','ASC')->get();
      return response()->json($work_flow_types);
    }

    public function getWordsCount(){
      $wordsCount =WordsCount::orderBy('id','ASC')->get();
      return response()->json($wordsCount);
    }

    public function getDeliveryTime(){
      $deliveryTime =ContentDelivery::orderBy('id','ASC')->get();
      return response()->json($deliveryTime);
    }

    public function getContentPricing(){
      $content_pricing =ContentPrice::orderBy('id','ASC')->get();
      return response()->json($content_pricing);
    }
}
