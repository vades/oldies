<?php

namespace App\Modules\Api\ContactForm;

use App\Http\Controllers\Controller;
use App\Modules\Api\ContactForm\ContactFormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ContactFormRequest $request)
    {
       
      Mail::raw($request->message, function ($email) use ($request) {
        $email->from($request->from, 'Unknown user');
        $email->to('vades.cz@gmail.com');
        $email->subject('Message from web '.($request->has('webname') ? $request->webname : ''));

    });
    return response()->json(['message' => 'Your email was sent successfully.']);

    }
}
