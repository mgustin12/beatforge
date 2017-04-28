<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\User;

class CreateUserMutation extends Mutation {

    protected $attributes = [
        'name' => 'createUser'
    ];

    public function type()
    {
        return GraphQL::type('User');
    }

    public function args()
    {
        return [
			'username' => ['name' => 'username', 'type' => Type::nonNull(Type::string())],
            'name' => ['name' => 'name', 'type' => Type::nonNull(Type::string())]
        ];
    }

    public function resolve($root, $args)
    {
		$user = new User([
			'username' => $args['username'],
			'name' => $args['name'],
            'beats' => [],
            'beatpads' => []
		]);

        $user->save();

        return $user;
    }

}