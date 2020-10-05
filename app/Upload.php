<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
   protected $fillable =[
       'user_id',
       'order_id',
       'file'
   ];

}
