
@extends('snippman.layouts.master')
@section('title', $snippet->title)

@section('content')
<article class="snippet {{$snippet->category}}">
<header>
<div class="snippet-category">
<img src="{{$snippet->img}}" alt="{{$snippet->category_name}}"> <span>{{$snippet->category_name}}</span>
</div>
<div class="snippet-date">
<i class="far fa-clock"></i> <span>{{$snippet->created_at->format('d.m.Y')}}</span>
</div>
<div class="snippet-gist">
<a href="{{config('snippman.gist_url').$snippet->sku}}" target="_blank">
<i class="fab fa-github"></i> <span>GitHub</span>
</a>
</div>
</header>
<section class="snippet-body">
    @markdown($snippet->content)
</section>
</article>
@endsection
