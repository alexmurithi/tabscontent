<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContentOrder extends Model
{
    protected $fillable =[
        'content_type',
        'workflow_type',
        'language',
        'amount_of_words',
        'urgency',
        'title',
        'amount_paid',
        'instructions',
        'upload_id',
        'user_id'
    ];
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function upload(){
        return $this->hasOne('App\Upload');
    }
}
