<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable=[
        'order_id',
        'user_id',
        'upload_id',
        'type',
        'words',
        'quality',
        'package',
        'amountPaid',
        'urgency'
    ];
}
