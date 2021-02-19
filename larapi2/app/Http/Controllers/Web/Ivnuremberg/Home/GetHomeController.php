<?php

namespace App\Http\Controllers\Web\Ivnuremberg\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Storage;
use GrahamCampbell\Markdown\Facades\Markdown;
use Yaml;

class GetHomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $json = file_get_contents(resource_path('json/places.json'));
        $places = json_decode($json);
        $content = file_get_contents(resource_path('ivnuremberg/md/places/place.md'));
        //$yaml = Yaml::parse($yaml_content);
        $data = [
            'places' => $places,
            'content' =>  $content,
            //'yaml' => $yaml
        ];
        return view('ivnuremberg.home.home', $data);
    }
}
