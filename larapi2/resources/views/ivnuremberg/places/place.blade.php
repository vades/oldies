@extends('ivnuremberg.shared.layouts.master')

@section('content')
<article>

    <section class="page-header">
        <h1>{{$post->title}} <small> {{$post->subtitle ?? ''}}</small></h1>
    </section>
   
    <section class="page-excerpt">
        <figure>
            <img class="Media-figure" src="{{$place->thumbnail}}" alt="{{$place->title}}">
        </figure>
        @markdown($post->content)
    </section>
    <section class="page-content">
    {{-- @markdown($place) --}}
    </section>
</article>
@include('ivnuremberg.places.loop')
@endsection