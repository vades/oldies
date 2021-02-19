<?php
namespace App\Lib\Lang;
use Illuminate\Support\Facades\Facade;

class LangswitchFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'langswitch';
    }
}