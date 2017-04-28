<?php

namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class BeatType extends GraphQLType {

    protected $attributes = [
        'name' => 'Beat',
        'description' => 'A beat'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the beat'
            ],
			'name' => [
				'type' => Type::nonNull(Type::string()),
				'description' => 'The name of the beat'
			],
            'creator' => [
                'type' => Type::nonNull(GraphQL::type('User')),
                'description' => 'The username of the creator'
            ],
            'path' => [
                'type' => Type::string(),
                'description' => 'The path to the beat file'
            ],
            'upvotes' => [
                'type' => Type::int(),
                'description' => 'The number of upvotes'
            ],
            'comments' => [
                'type' => Type::listOf(GraphQL::type('Comment')),
                'description' => 'The comments on the beat'
            ]
        ];
    }
}