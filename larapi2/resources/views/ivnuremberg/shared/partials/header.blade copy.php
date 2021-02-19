<header id="header">
  <section class="container">

    <!-- Brand -->
    <div id="headerBrand">
      <a href="{{ route('ivn.home')}}" title="{{__('home')}}">{{env('APP_NAME')}}</a>
    </div>
    <!-- Primary -->
    <div id="headerPrimary">
      <span class="hide-max-m">Larapi demo</span>
    </div>

  </section>
</header>

<!-- Hamburger -->
<div id="headerMenu">
    <div id="menuToggle">
      <a class="menu-toggler" href="{{ route('ivn.menu')  }}" onclick="toggleMenu(event)">
        <x-maticon icon="menu" class="icon"></x-maticon>
      </a>
      <nav role="navigation" id="mainMenu" class="nav">
      <a class="menu-toggler" href="{{ route('ivn.menu')  }}" onclick="toggleMenu(event)">
        <x-maticon icon="menu" class="icon"></x-maticon>
      </a>
        <x-ivn.menu class="menu-header"></x-ivn.menu>
      </nav>

    </div>

</div>