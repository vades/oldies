<?php

namespace App\Lib\Lang;

use Illuminate\Support\ServiceProvider;

use App\Lib\Lang\Langswitch;

class LangswitchServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('langswitch',function(){

            return new Langswitch();
    
            });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
