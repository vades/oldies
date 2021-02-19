@extends('errors.layout')

@section('title') Error 404 - Not found @endsection

@section('content')
    <article>
        <section class="error-page-header">
        <x-svg svg="error404"></x-svg>
            <h1>{{__('app.error404')}}</h1>
        </section>
        <section class="error-page-content">
            <p>
            {{__('app.error404_txt')}}
            </p>
        <x-ivn.menu class="menu-page"></x-ivn.menu>
        </section>
    </article>
  @endsection