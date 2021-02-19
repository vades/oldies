<?php

namespace App\Http\Handlers\Imports\Post;

use App\Lib\Helpers\FileHelper;
use App\Http\Handlers\Imports\Post\ImportPostArticleHandler;
use App\Http\Handlers\Imports\Post\ImportPostPageHandler;
use App\Http\Handlers\Imports\Post\ImportPostCategoryHandler;
use App\Http\Handlers\Imports\Post\ImportPostPhotoHandler;
use App\Http\Handlers\Imports\Post\ImportPostPlaceHandler;
use App\Http\Handlers\Imports\Post\ImportPostTagHandler;

/**
 * ImportPostHandler class
 *
 * @author Martin Vach
 */
class ImportPostHandler
{
    private $dirpath;

    private $dirs = [
        'article' => [
            'errors' => [],
            'success' => []
        ],
        'page' => [],
        'place' => [],
        'category' => [],
        'tag' => [],
        'photo' => []
    ];
    /**
     * Class constructor
     *
     * @return void
     */
    public function __construct()
    {
        $dirpath = storage_path('app/public/import/posts/');
        $this->setDirpath($dirpath);
    }

    public function init()
    {
        foreach ($this->dirs as $dir => $value) {
            $files = FileHelper::dirIterator($this->getDirpath() . $dir . '/');
            $this->proceed($dir, $files);
        }
        return $this->dirs;
    }

    private function proceed($dir,  $files)
    {
        switch ($dir) {
            case 'article':
                $this->parseArticle($files);
                break;

            default:
                # code...
                return;
        }
    }

    private function parseArticle($files)
    {
        $allowed_ext = ImportPostArticleHandler::getAllowedExtensions();
        foreach ($files as $filename) {
            try {
                FileHelper::validateFile($filename, $allowed_ext);
                $str = FileHelper::getContents($filename);
                $article = new ImportPostArticleHandler($str);
                array_push($this->dirs['article']['success'], FileHelper::getFileNameFromPath($filename));
            } catch (\Exception $e) {
                array_push($this->dirs['article']['errors'], $e->getMessage() . ' ['.FileHelper::getFileNameFromPath($filename).']');
            }
        }
        return;
    }

    /**
     * Get the value of dirpath
     */
    public function getDirpath()
    {
        return $this->dirpath;
    }

    /**
     * Set the value of dirpath
     *
     * @return  self
     */
    public function setDirpath($dirpath)
    {
        $this->dirpath = $dirpath;

        return $this;
    }
}
