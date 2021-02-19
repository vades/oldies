<header id="header">
  <section class="container">

    <!-- Brand -->
    <div id="headerBrand">
   
      <a href="{{ route('ivn.home')}}" title="{{__('ivn.homepage')}}">@component('components.ivn.logo') @endcomponent</a>
    </div>
    <!-- Primary -->
    <div id="headerPrimary">
      <span class="hide-max-m">{{__('ivn.slogan')}}</span>
    </div>
    <div id="headerSecondary">Right column</div>
  </section>
</header>