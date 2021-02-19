<?php

namespace App\Lib\Helpers;

use Exception;
use phpDocumentor\Reflection\Types\Boolean;

/**
 * FileHelper class
 *
 * @author Martin Vach
 */
class FileHelper
{
    public static function dirIterator(string $dirname)
    {
        $files = [];
        $iterator = new \DirectoryIterator($dirname);

        foreach ($iterator as $fileinfo) {
            if (!$fileinfo->isDot()) {
                //echo $fileinfo->getFilename() . "\n";
                array_push($files, $dirname . $fileinfo->getFilename());
            }
        }
        return $files;
    }

    /**
     * Reads entire file into a string
     * 
     * @return string | null
     */
    public static function getContents(string $filename) : ?string
    {
        $str = file_get_contents($filename);
        if (empty($str)) {
           return null;
        }
        return $str;
    }


    /**
     * Reads entire file into a string
     * 
     * @return void
     */
    public static function validateFile(string $filename, array $allowed_extensions)
    {
       if(!self::hasAllowedExtension($filename, $allowed_extensions)){
            throw new \Exception('The file extension is not allowed');
       }
       return;
    }

    /**
     * Check if file has allowed extension
     * 
     * @return bool
     */
    public static function hasAllowedExtension(string $filename, array $allowed_extensions) : bool
    {
        $file_extension = pathinfo($filename, PATHINFO_EXTENSION);
        return in_array($file_extension, $allowed_extensions);
    }

    /**
     * Returns trailing name component of path
     * 
     * @return string 
     */
    public static function getFileNameFromPath(string $path) : string
    {
        return basename($path);
    }
}
