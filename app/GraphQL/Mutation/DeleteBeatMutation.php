<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\Beat;

class DeleteBeatMutation extends Mutation {

    protected $attributes = [
        'name' => 'deleteBeat'
    ];

    public function type()
    {
        return GraphQL::type('Beat');
    }

    public function args()
    {
        return [
        	'id' => ['name' => 'id', 'type' => Type::nonNull(Type::int())]
        ];
    }

    public function resolve($root, $args)
    {
        $beat = Beat::find($args['id']);
        if(!$beat)
        {
            return null;
        }

        $deletedBeat = $beat->toArray();
        $beat->delete();

        return $deletedBeat;
    }

}