<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Snippet extends Model
{
    protected $casts = [
        "meta" => "array",
    ];

    /**
     * Get the slug.
     *
     * @return string
     */
    public function getSlugAttribute()
    {
        return str_slug($this->title . '-' . $this->id, '-');
    }

     /**
     * Get the category name.
     *
     * @return string
     */
    public function getCategoryNameAttribute()
    {
        return config('snippman.categories.'.$this->category)  ?: $this->category;
    }

     /**
     * Get the image.
     *
     * @return string
     */
    public function getImgAttribute()
    {
      return config('snippman.categories.'.$this->category)  
      ? asset('img/categories/'.$this->category.'.png') 
      : asset('img/categories/other.png') ;
    }


    /**
     * Scope a query to only include data filtered by given filter.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRequestFilter($query, Request $request)
    {

        // Search for data
        if ($request->has('q')) {
            $query->where('title', 'LIKE', '%' . $request->q . '%')
            ->orWhere('category', 'LIKE', '%' . $request->q . '%')
            ->orWhere('content', 'LIKE', '%' . $request->q . '%');
        }

        return $query;
    }

    /**
     * Scope a query to orderby given request.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRequestOrderBy($query, Request $request)
    {

        // Defaults
        $order_by = 'created_at';
        $sort = 'DESC';

        // Is order by requested?
        if ($request->has('order_by')) {
            $order_by = $request->order_by;
        }

        // Is sort requested?
        if ($request->has('sort')) {
            $sort = ($request->sort == 'desc' ? 'DESC' : 'ASC');
        }

        return $query->orderBy($order_by, $sort);
    }

}
