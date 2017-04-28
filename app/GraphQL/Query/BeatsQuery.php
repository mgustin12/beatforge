<?php

namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use App\Models\Beat;

class BeatsQuery extends Query {

    protected $attributes = [
        'name' => 'beats'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Beat'));
    }

    public function args()
    {
        return [];
    }

    public function resolve($root, $args)
    {
        return Beat::all();
    }

}