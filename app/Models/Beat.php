<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Beat extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id', 'path'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [

    ];

    public function creator() {
        return $this->belongsTo('App\Models\User', 'user_id');
    }

	public function sharedBy() {
		return $this->belongsToMany('App\Models\User', 'beats_users');
	}

    public function beatpads() {
        return $this->belongsToMany('App\Models\Beatpad', 'beatpads_beats');
    }

    public function comments() {
        return $this->hasMany('App\Models\Comment');
    }
}
