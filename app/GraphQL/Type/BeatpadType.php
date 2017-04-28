<?php

namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class BeatpadType extends GraphQLType {

    protected $attributes = [
        'name' => 'Beatpad',
        'description' => 'A beatpad'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the beatpad'
            ],
			'name' => [
				'type' => Type::nonNull(Type::string()),
				'description' => 'The name of the beatpad'
			],
            'creator' => [
				'type' => Type::nonNull(GraphQL::type('User')),
                'description' => 'The username of the creator'
            ],
            'beats' => [
                'type' => Type::listOf(GraphQL::type('Beat')),
                'description' => 'The array of beats'
            ]
        ];
    }
}