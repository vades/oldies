<?php

namespace App\Http\Controllers\Web\Ivnuremberg\Places;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Lib\Helpers\PostParser;

class GetPlaceController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, string $slug)
    {
        
        $input = file_get_contents(resource_path('ivnuremberg/md/places/place.md'));
        $post = new PostParser($input);
        //$yaml = Yaml::parse($yaml_content);
        /* $data = [
            'place' => $place,
            'place' =>  $place,
            //'yaml' => $yaml
        ];
      */
        
        $json = file_get_contents(resource_path('json/places.json'));
        $places = json_decode($json);
        $collection = collect(json_decode($json));
        $place = $collection->where('slug', $slug)->first();
        //dd($place);
        $data = [
            'post' => $post->getPost(),
            'content' => $input,
            'place' => $place,
            'places' => $places
        ];
        return view('ivnuremberg.places.place', $data);
    }
}
