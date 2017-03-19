<?php

namespace App\Models;

// use Illuminate\Auth\Authenticatable;
// use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
// use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class User extends Model
{
    // use Authenticatable, Authorizable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'username',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [

    ];

    public function beats() {
        return $this->hasMany('App\Models\Beat');
    }

    public function sharedBeats() {
        return $this->belongsToMany('App\Models\Beat');
    }

    public function beatpads() {
        return $this->hasMany('App\Models\Beatpad');
    }
}
