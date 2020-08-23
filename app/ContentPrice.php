<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContentPrice extends Model
{
    protected $fillable =['amount_of_words','delivery_time','price'];
}
