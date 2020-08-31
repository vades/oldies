<?php

namespace App\Modules\Snippman\PullGists;

use App\Eloquent\Snippet;

/**
 * FetchSingleGist handler
 *
 * @author Martin Vach
 */
class StoreGistHandler
{
    /**
     * Handle the incoming request.
     *
     *@return void
     */
    public function __invoke($data)
    {
       $snippet = Snippet::where('sku',$data['sku'])->first();
      if(!$snippet){
        $snippet = new Snippet;
      }
      $snippet->sku = $data['sku'];
      $snippet->user_id = $data['user_id'];
      $snippet->category = $data['category'];
      $snippet->title = $data['title'];
      $snippet->content = $data['content'];
      $snippet->public = $data['public'];
      $snippet->meta = $data['meta'];
      $snippet->created_at = $data['created_at'];
      $snippet->updated_at = $data['updated_at'];
      $snippet->save();
    }

}
