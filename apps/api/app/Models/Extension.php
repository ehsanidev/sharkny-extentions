<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Extension extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'extensions';

    protected $fillable = [
        'name',
        'category',
        'price',
        'status',
        'description',
        'featured',
        'rating',
        'downloads',
        'tags',
    ];
}
