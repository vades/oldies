@extends('snippman.layouts.master') 
@section('title', __('contact')) 
@section('h1', __('contact')) 
@section('content')
  @include('snippman.pages.contact-form')
@endsection
