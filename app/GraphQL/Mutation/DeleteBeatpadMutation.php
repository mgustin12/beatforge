<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\Beatpad;

class DeleteBeatpadMutation extends Mutation {

    protected $attributes = [
        'name' => 'deleteBeatpad'
    ];

    public function type()
    {
        return GraphQL::type('Beatpad');
    }

    public function args()
    {
        return [
        	'id' => ['name' => 'id', 'type' => Type::nonNull(Type::int())]
        ];
    }

    public function resolve($root, $args)
    {
        $beatpad = Beatpad::find($args['id']);
        if(!$beatpad)
        {
            return null;
        }

        $deletedBeatpad = $beatpad->toArray();
        $beatpad->delete();

        return $deletedBeatpad;
    }

}