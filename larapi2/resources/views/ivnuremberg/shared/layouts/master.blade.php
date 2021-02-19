<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('ivnuremberg.shared.partials.head') @show

<body>
    <section id="approot">
        @include('ivnuremberg.shared.partials.header') @show

        <section id="page" class="layout-c">
            @include('ivnuremberg.shared.partials.content') @show
        </section>

        @include('ivnuremberg.shared.partials.footer') @show
    </section>
    <script src="{{ asset('ivnuremberg/assets/js/jquery-3.5.1.min.js')}}"></script>
    <script src="{{ asset('ivnuremberg/assets/js/build.js')}}"></script>
</body>

</html>