
@extends('snippman.shared.layouts.master')
@section('title', $snippet->title)


@section('content')
<h1>{{$snippet->title}}</h1>
<section>
    @markdown($snippet->content)
</section>
@endsection
