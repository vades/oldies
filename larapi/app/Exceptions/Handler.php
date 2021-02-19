<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Support\Facades\Log;

use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        // Some exceptions don't have a message
        $exception_message = (!empty($exception->getMessage()) ? trim($exception->getMessage()) : 'App Error Exception');

        // Log message
        $log_message = "\"" . $exception_message . " in file '" . $exception->getFile() . "' on line '" . $exception->getLine() . "'" . "\"";

        Log::error($log_message);
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        /* if ($request->ajax()) {
            return $this->renderApi($request, $exception);
        } */
       
        return parent::render($request, $exception);
    }

     /**
     * Handle custom api response
     *
     * 
     * @param  \Throwable   $exception
     * @return \Illuminate\Http\Response
     */
    private function renderApi($request, $exception)
    {
        switch (true) {
            case $exception instanceof MethodNotAllowedHttpException:
                return $this->customApiResponse($exception);

            default:
                return parent::render($request, $exception);
        }
    }


     /**
     * Handle custom api response
     *
     * @param \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    private function customApiResponse($exception)
    {
        if (method_exists($exception, 'getStatusCode')) {
            $status_code = $exception->getStatusCode();
        } else {
            $status_code = 500;
        }

        $response = $this->getMessage($status_code, $exception);
        // If the app is in debug mode
        if (config('app.debug')) {
            $response['trace'] = $exception->getTrace();
            $response['code'] = $exception->getCode();
        }

        $response['status'] = $status_code;

        return response()->json($response, $status_code);
    }

    /**
     * Get response message
     *
     * @param int $status_code
     * @param Exception $exception
     * @return array
     */
    private function getMessage($status_code, $exception): array
    {
        $response = [];
        $message = ($status_code == 500) ? 'Whoops, looks like something went wrong' : $exception->getMessage();

        if (\Lang::has('httpstatus.' . $status_code)) {
            $message = trans('httpstatus.' . $status_code);

            if (config('app.debug')) {
                $message .= '. '. $exception->getMessage();
            }
        }

        $response['message'] = $message;
        return  $response;
    }
}
