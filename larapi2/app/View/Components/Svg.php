<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Svg extends Component
{
    public $svg;

    public $class;

    public $path = '/img/svg/';


    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($svg = null, $class = '')
    {
        $this->svg = $svg;
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
        return view('components.svg');
    }

     /**
     * Get the value of path
     */ 
    public function getPath()
    {
        $file = public_path().$this->path . $this->svg.'.svg';
        return $file;
    }
}
