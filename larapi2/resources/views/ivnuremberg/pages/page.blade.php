@extends('ivnuremberg.shared.layouts.master')

@section('content')
    <article>
        <section class="page-header">
            <h1>Page {{$slug}}</h1>
        </section>
        <section class="page-contentr">
        <p>This is single page {{$slug}}.</p>
        </section>
    </article>
  @endsection