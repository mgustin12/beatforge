<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\Beatpad;

class CreateBeatpadMutation extends Mutation {

    protected $attributes = [
        'name' => 'createBeatpad'
    ];

    public function type()
    {
        return GraphQL::type('Beatpad');
    }

    public function args()
    {
        return [
            'name' => ['name' => 'name', 'type' => Type::nonNull(Type::string())],
			'creator' => ['name' => 'creator', 'type' => Type::nonNull(Type::int())]
        ];
    }

    public function resolve($root, $args)
    {
		$beatpad = new Beatpad([
			'name' => $args['name'],
			'user_id' => $args['creator'],
			'beats' => []
		]);

        $beatpad->save();

        return $beatpad;
    }

}