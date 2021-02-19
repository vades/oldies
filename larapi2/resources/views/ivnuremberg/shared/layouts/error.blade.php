<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('ivnuremberg.shared.partials.head') @show

<body>
    <section id="root">
        <section id="page" class="layout-error">
            @include('ivnuremberg.shared.partials.content') @show
        </section>
    </section>
    <script src="{{ asset('js/build.js')}}"></script>
</body>

</html>