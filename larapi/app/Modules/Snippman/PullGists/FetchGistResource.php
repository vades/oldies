<?php

namespace App\Modules\Snippman\PullGists;

use Illuminate\Http\Resources\Json\JsonResource;

class FetchGistResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $file = $this->parseFiles($this->files);
        return [
            'sku' => $this->id,
            'user_id' => 1,
            'category' =>  $file->category,
            'title' => $this->description,
            'content' =>  trim($file->content,'"'),
            'public' => (int) $this->public,
            'meta' => null,
            'created_at' =>  $this->parseDateTime($this->created_at),
            'updated_at' => $this->parseDateTime($this->updated_at),
        ];
        //return parent::toArray($request);
    }

    /**
     * Parse gist files and create content
     */
    private function parseFiles($files)
    {
        
        $file = new \stdClass;
        $file->category = null;
        $file->content = '';
        foreach ($files as $key => $value) {
          if(is_null($file->category)){
            $category = explode("-", $value->filename);
            $file->category =  str_slug($category[0],'-');
          }
         
            $file->content .=  $value->content;

        }
        return $file;
    }
    /**
     * Parse gist files and create content
     */
    private function parseDateTime($string)
    {
      $date = new \DateTime($string);
      return $date->format('Y-m-d H:i:s');
    }

      /**
     * Parse gist files and create content
     */
   /*  private function parseFiles($files)
    {
        $content = [];
        foreach ($files as $key => $value) {
            array_push($content, [
                'language' => $value->language,
                'content' => $value->content,
            ]);

        }
        return $content;
    } */
}
