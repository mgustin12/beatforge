<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\User;

class DeleteUserMutation extends Mutation {

    protected $attributes = [
        'name' => 'deleteUser'
    ];

    public function type()
    {
        return GraphQL::type('User');
    }

    public function args()
    {
        return [
        	'id' => ['name' => 'id', 'type' => Type::nonNull(Type::int())]
        ];
    }

    public function resolve($root, $args)
    {
        $user = User::find($args['id']);
        if(!$user)
        {
            return null;
        }

        $deletedUser = $user->toArray();
        $user->delete();

        return $deletedUser;
    }

}