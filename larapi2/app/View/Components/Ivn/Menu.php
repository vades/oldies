<?php

namespace App\View\Components\Ivn;

use Illuminate\View\Component;

class Menu extends Component
{
    
    public $class;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($class = '')
    {
          $this->class = $class;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.ivn.menu');
    }
}
