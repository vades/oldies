<section id="page" class="layout-m">
    <main id="main" class="container">
    @hasSection('h1')
    <section class="page-header">
    <h1>
     <span> @yield('title')</span>
    </h1>
    @hasSection('title_addon')
    <div>@yield('title_addon')</div>
    @endif
    </section>
    @endif
    @yield('content')

    </main>
  </section>
