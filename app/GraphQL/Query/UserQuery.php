<?php

namespace App\GraphQL\Query;

use Log;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use App\Models\User;

class UserQuery extends Query {

    protected $attributes = [
        'name' => 'user'
    ];

    public function type()
    {
        return GraphQL::type('User');
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
			return User::find($args['id']);
        }
    }

}