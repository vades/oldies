@extends('ivnuremberg.shared.layouts.master')

@section('content')
    <article>
        <section class="page-header">
            <h1>Home Title</h1>
        </section>
        @markdown($content)
        <section class="page-content">
        @include('ivnuremberg.places.loop')
        </section>
    </article>
  
@endsection