<?php

namespace App\Listeners;

use App\Events\SnippetShown;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\Eloquent\Snippet;

class UpdateSnippetShown
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  SnippetShown  $event
     * @return void
     */
    public function handle(SnippetShown $event)
    {
        $snippet = Snippet::find($event->snippet->id);
        if(!$snippet){
          return;
        }
        $snippet->shown += 1;
        $snippet->save();
    }
}
