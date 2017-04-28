<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\Beat;

class UpdateBeatMutation extends Mutation {

    protected $attributes = [
        'name' => 'updateBeat'
    ];

    public function type()
    {
        return GraphQL::type('Beat');
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::nonNull(Type::int())],
            'name' => ['name' => 'name', 'type' => Type::string()],
			'upvotes' => ['name' => 'upvotes', 'type' => Type::int()]
        ];
    }

    public function resolve($root, $args)
    {
        $beat = Beat::find($args['id']);
        if(!$beat)
        {
            return null;
        }

		if($args['name'])
		{
			$beat->name = $args['name'];
		}
		if($args['upvotes'])
		{
			$beat->upvotes = $args['upvotes'];
		}

        $beat->save();

        return $beat;
    }

}