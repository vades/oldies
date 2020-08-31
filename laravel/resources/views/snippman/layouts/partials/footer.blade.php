<footer id="footer">
  <div class="bar container">
    <span>©{{ date('Y') }} {{config('snippman.app_name')}}</span>
    <a href="{{ route('snippmanHome')  }}">{{__('home')}}</a>
    <a href="{{ route('snippmanAbout')  }}">{{__('about')}}</a>
    <a href="{{ route('snippmanContact')  }}">{{__('contact')}}</a>
  </div>
</footer>