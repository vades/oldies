<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('snippman.layouts.partials.head') @show

<body class="sticky-header">

  
@section('header')
  @include('snippman.layouts.partials.header') @show

  @include('snippman.layouts.partials.content')

  @section('footer')
  @include('snippman.layouts.partials.footer') @show

  <script src="{{ asset('js/vendor.js') }}"></script>
<script src="{{ asset('js/build.min.js') }}"></script>
</body>

</html>