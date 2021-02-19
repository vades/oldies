<?php

class DirHandler{
    private $path;

    function __construct(string $path){
        $this->setPath($path);
    }

    public function getPath(){
        return $this->path;
    }

    public function setPath(string $path){
        $this->path = $path;
        return $this;
    }

    public function getDirs(){
        $dirs = [];
        $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($this->getPath()));
        foreach($iterator as $file) {
            if ($file->getFilename() == '.') {
                array_push($dirs, $file->getPath());
            }
        }
        return $dirs;
    }

}