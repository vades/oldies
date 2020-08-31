
@extends('snippman.layouts.master')
@section('title', __('display_search_result',['q' => $q,'count' => $count])) 
@if ($count > 0)
@section('h1', __('display_search_result',['q' => $q,'count' => $count])) 
@endif

@section('content')
@if ($count < 1)
@include('components.alert.alert',[
  'class' => 'is-info',
  'header' => __('error_404_snippets',['q' => $q]),
  'message' => __('enter_different_query')
  ])
@else
<section class="panel-card">
@include('snippman.snippets.loop')
</section>
@endif

@endsection
