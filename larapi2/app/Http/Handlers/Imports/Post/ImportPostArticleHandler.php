<?php

namespace App\Http\Handlers\Imports\Post;

use App\Lib\Helpers\ImportHelper;
use App\Lib\Helpers\StringHelper;
use Symfony\Component\Yaml\Yaml;
use Illuminate\Support\Facades\Validator;


/**
 * ImportPostArticleHandler class
 *
 * @author Martin Vach
 */
class ImportPostArticleHandler
{
    private $input;
    private $delimiter = '---';

    private $requiredParams = [
        'id',
        'title',
        'slug'
    ];

    private static $allowedExtensions = ['md'];

    private $paramRules = [
        "id" => 'required|integer',
        "title" => "required|string"

    ];

    private $result = '';

    /**
     * Class constructor
     *
     * @return void
     */
    public function __construct(?string $input)
    {
        $this->setInput($input);
        $this->parseInput();
        //$this->proceed($file);
    }

    private function parseInput()
    {
        $input = ImportHelper::validateString($this->getInput());
        $array = ImportHelper::explodeString($this->delimiter, $input);
        $params = ImportHelper::parseParams($array[0]);
        $meta = ImportHelper::getMeta($params);

        $slug = StringHelper::toSlug($params['title']);
        //dd($slug );
        ImportHelper::validateParams($params, $this->paramRules);
        $params['content'] = ImportHelper::parseContent($array[1]);
        $params['excerpt'] =  strtok($params['content'], "\n");
        dd($params);
        return;
    }

    private function build(array $params)
    {
    }

    private function proceed(array $params)
    {
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

    /**
     * Get the value of allowedExtensions
     */
    public static function getAllowedExtensions()
    {
        return self::$allowedExtensions;
    }
}
