<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogBasic extends Model
{
    protected $fillable =[
      'words',
      'amount',
      'quality',
      'urgency'
    ];
}
