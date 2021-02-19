<?php

namespace App\Lib\Helpers;

use Symfony\Component\Yaml\Yaml;
use Illuminate\Support\Facades\Validator;
use stdClass;

/**
 * ImportHelper class
 *
 * @author Martin Vach
 */
class PostParser
{
    private $input = '';
    private $delimiter = '---';

    private $post;
    
    function __construct(string $input, ?string $delimiter = null ){
        
        $this->setInput($input);
        $this->setDelimiter($delimiter);
        $this->proceed();
    }

    private function proceed(){
        $post = [];
        $array = $this->explodeString($this->input,$this->delimiter );
        $output =  $this->parseParams($array[0]);
        $output['content'] = $this->parseContent($array[1]);
       
        $post = json_decode (json_encode ($output), FALSE);
        $this->setPost((object) $post);
        return;
    }
    
    
    private function explodeString(string $input, string $delimiter )
    {
        $array = explode($delimiter, $input);
        return $array;
    }
    /**
     * Parse string with params and returns an array
     *
     * @param string $input
     * @return array
     */
    private function parseParams(string $input): array
    {
       
        $params = Yaml::parse($input);
        if(empty($params)){
            throw new \Exception('Empty params');
        }
        return $params;
    }

    /**
     * TODO: remove multiple white spaces, tabs etc
     * Parse content
     *
     * @param string $input
     * @return string | null
     */
    public static function parseContent(?string $input): ?string
    {
        return $input;
    }


    /**
     * Get the value of post
     */ 
    public function getPost()
    {
        return $this->post;
    }

    /**
     * Set the value of post
     *
     * @return  self
     */ 
    public function setPost($post)
    {
        $this->post = $post;

        return $this;
    }

    /**
     * Get the value of delimiter
     */ 
    public function getDelimiter()
    {
        return $this->delimiter;
    }

    /**
     * Set the value of delimiter
     *
     * @return  self
     */ 
    public function setDelimiter($delimiter)
    {
        $this->delimiter = $delimiter ?? $this->delimiter;

        return $this;
    }

    /**
     * Get the value of input
     */ 
    public function getInput()
    {
        return $this->input;
    }

    /**
     * Set the value of input
     *
     * @return  self
     */ 
    public function setInput($input)
    {
        $this->input = $input;

        return $this;
    }
}
