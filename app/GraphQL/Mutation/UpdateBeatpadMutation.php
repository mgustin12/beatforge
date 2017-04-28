<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\Beatpad;

class UpdateBeatpadMutation extends Mutation {

    protected $attributes = [
        'name' => 'updateBeatpad'
    ];

    public function type()
    {
        return GraphQL::type('Beatpad');
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
        $beatpad = Beatpad::find($args['id']);
        if(!$beatpad)
        {
            return null;
        }

		if($args['name'])
		{
			$beatpad->name = $args['name'];
		}

        $beatpad->save();

        return $beatpad;
    }

}