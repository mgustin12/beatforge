<?php

namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class CommentType extends GraphQLType {

    protected $attributes = [
        'name' => 'Comment',
        'description' => 'A beat comment'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the comment'
            ],
			'author' => [
				'type' => Type::nonNull(GraphQL::type('User')),
				'description' => 'The author of the comment'
			],
            'text' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The comment text'
            ]
        ];
    }
}