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
        'name'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [

    ];

    public function user() {
        return $this->belongsTo('App\Models\User');
    }

	public function sharedBy() {
		return $this->belongsToMany('App\Models\User');
	}

    public function beatpads() {
        return $this->belongsToMany('App\Models\Beatpad');
    }
}
