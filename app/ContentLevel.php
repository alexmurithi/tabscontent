<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class ContentLevel extends Model
{
    protected $fillable =
    [
        'level',
        'words',
    ];

   public function contentDetails()
   {
       return $this->hasMany('App\ContentDetail','content_levels_id','id');
   }
}
