<footer id="footer">
  <div class="bar container">
    <span>©{{ date('Y') }}  @component('components.ivn.logo') @endcomponent</span>
    <a href="{{ route('ivn.home')  }}">{{__('home')}}</a>
    <a href="{{ route('ivn.page',['slug' => 'about'])  }}">{{__('about')}}</a>
    <a href="{{ route('ivn.page',['slug' => 'contact'])  }}">{{__('contact')}}</a>
  </div>
</footer>