<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Beatpad extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id'
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

	public function beats() {
		return $this->belongsToMany('App\Models\Beat', 'beatpads_beats');
	}
}
