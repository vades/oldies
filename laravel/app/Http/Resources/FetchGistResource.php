<?php

namespace App\Http\Resources;

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
      return [
        'sku' => $this->id,
        'description' => $this->description,
        'content' => null,
        'public' => (int)$this->public,
        'meta' => null,
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
    ];  
      //return parent::toArray($request);
    }
}
