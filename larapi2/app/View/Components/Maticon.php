<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Maticon extends Component
{
    public $icon;

    public $class;

    public $path = '/img/icons/material/';

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct( $icon = null, $class = '')
    {
        $this->icon = $icon;
        $this->class = $class;
        $this->path = $this->getPath();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.maticon');
    }

    

    /**
     * Get the value of path
     */ 
    public function getPath()
    {
        $file = public_path().$this->path . $this->icon.'.svg';
        return $file;
    }
}
