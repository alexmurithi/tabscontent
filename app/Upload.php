<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $fillable =['file','content_order_id','academic_order_id'];
}
