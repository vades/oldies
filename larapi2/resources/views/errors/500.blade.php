@extends('errors.layout')

@section('title') Error 500 @endsection

@section('content')
    <article>
        <section class="error-page-header">
        <x-svg svg="error500"></x-svg>
            <h1>{{__('app.error500')}}</h1>
        </section>
        <section class="error-page-content">
        {{__('app.error500_txt')}}
        </section>
    </article>
  @endsection