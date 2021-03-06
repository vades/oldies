<?php

namespace App\Http\Controllers\Api\V1\Auth\Password;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Uuid;

class ConfirmPasswordController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $token)
    {
        if( !Uuid::isValidUuid($request->route('token'))){
            return response()->json([
                'status' => 422,
                'message' => trans('validation.uuid',['attribute' => 'token'])
            ]);
        }
        return response()->json([
            'message' => __METHOD__,
            'token' =>$request->route('token')
        ]);
    }
}
