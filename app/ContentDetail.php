<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContentDetail extends Model
{
    protected $fillable =
    [
        'content_levels_id',
        'price',
        'deadline',
    ];

    public function contentLevel()
    {
        return $this->belongsTo('App\ContentLevel','content_levels_id','id');
    }
}
