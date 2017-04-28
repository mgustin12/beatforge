<?php

namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use App\Models\Beat;

class BeatQuery extends Query {

    protected $attributes = [
        'name' => 'beat'
    ];

    public function type()
    {
        return GraphQL::type('Beat');
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()]
        ];
    }

    public function resolve($root, $args)
    {
        if(isset($args['id']))
        {
            return Beat::find($args['id']);
        }
    }

}