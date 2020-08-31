
@extends('snippman.shared.layouts.master')
@section('title', __('snippets')) 

@section('content')
<section class="panel-card">
@include('snippman.snippets.snippets.loop')
</section>
@endsection
