<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\Beat;

class CreateBeatMutation extends Mutation {

    protected $attributes = [
        'name' => 'createBeat'
    ];

    public function type()
    {
        return GraphQL::type('Beat');
    }

    public function args()
    {
        return [
            'name' => ['name' => 'name', 'type' => Type::nonNull(Type::string())],
			'creator' => ['name' => 'creator', 'type' => Type::nonNull(Type::int())],
			'path' => ['name' => 'path', 'type' => Type::nonNull(Type::string())]
        ];
    }

    public function resolve($root, $args)
    {
		$beat = new Beat([
			'name' => $args['name'],
			'user_id' => $args['creator'],
			'path' => $args['path'],
			'upvotes' => 0,
			'comments' => []
		]);

        $beat->save();

        return $beat;
    }

}