<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType {

    protected $attributes = [
        'name' => 'User',
        'description' => 'A user'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user'
            ],
			'name' => [
				'type' => Type::nonNull(Type::string()),
				'description' => 'The name of the user'
			],
            'username' => [
                'type' => Type::string(),
                'description' => 'The username of the user'
            ]
        ];
    }
}