<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\User;

class UpdateUserMutation extends Mutation {

    protected $attributes = [
        'name' => 'updateUser'
    ];

    public function type()
    {
        return GraphQL::type('User');
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::nonNull(Type::int())],
            'name' => ['name' => 'name', 'type' => Type::string()]
        ];
    }

    public function resolve($root, $args)
    {
        $user = User::find($args['id']);
        if(!$user)
        {
            return null;
        }

		if($args['name'])
		{
			$user->name = $args['name'];
		}

        $user->save();

        return $user;
    }

}