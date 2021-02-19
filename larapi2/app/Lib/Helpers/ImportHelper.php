<?php

namespace App\Lib\Helpers;

use Symfony\Component\Yaml\Yaml;
use Illuminate\Support\Facades\Validator;


/**
 * ImportHelper class
 *
 * @author Martin Vach
 */
class ImportHelper
{
    public static function explodeString(string $delimiter, string $input)
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
    public static function parseParams(string $input): array
    {
       
        $params = Yaml::parse($input);
        if(empty($params)){
            throw new \Exception('Empty params');
        }
        return $params;
    }

    /**
     * Get post meta values from params
     *
     * @param string $params
     * @return array
     */
    public static function getMeta(array $params): array
    {
        $meta = $params['meta'] ?? null;
        return $meta;
    }

    /**
     * Validate string - check if empty
     * 
     * @return void
     */
    public static function validateString(?string $string) : string
    {
        if (empty($string)) {
            throw new \Exception('The string is empty');
        }
       return $string;
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
     * Validate params
     *
     * @param array $params
     * @param array $rules
     * @return void
     */
    public static function validateParams(array $params, array $rules)
    {
        $validator = Validator::make($params, $rules);

        if ($validator->fails()) {
            $errors = self::getValidationErrors($validator);
            throw new \Exception(implode(' ', $errors));
        }

        return;
    }
    /**
     * Get validaton errors
     *
     * @param Validator $validator
     * @return array
     */
    private static function getValidationErrors($validator) : array{
        $result = [];
        $errors = $validator->messages()->get('*');
        foreach ($errors as $error) {
           array_push($result, implode(' ', $error));
        }
        return $result;
    }
}
