<?php

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class ClassCommand extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $name = 'make:class';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create class';

    /**
    * The type of class being generated.
    *
    * @var string
    */
    protected $type = 'Class';
    
    /**
    * Get the stub file for the generator.
    *
    * @return string
    */
    protected function getStub()
    {
        return  app_path().'/Console/Stubs/class.stub.php';
    }

    /**
    * Get the default namespace for the class.
    *
    * @param  string  $rootNamespace
    * @return string
    */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace.'\Lib';
    }

    /**
    * Get the console command options.
    *
    * @return array
    */
    protected function getOptions()
    {
        return [];
    }
}
