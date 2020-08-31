
@extends('snippman.layouts.master')
@section('title', __('snippets')) 
@section('h1', __('snippets')) 

@section('content')
<section class="panel-card">
@include('snippman.snippets.loop')
</section>
@endsection
