<?php

namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use App\Models\Beatpad;

class BeatpadQuery extends Query {

    protected $attributes = [
        'name' => 'beatpad'
    ];

    public function type()
    {
        return GraphQL::type('Beatpad');
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
            return Beatpad::find($args['id']);
        }
    }

}