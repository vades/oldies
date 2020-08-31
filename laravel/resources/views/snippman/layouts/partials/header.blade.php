<header id="header">
  <section class="container">
     <!-- Brand -->
   <div id="headerBrand">
      <a href="{{ route('snippmanHome')  }}" title="{{config('snippman.app_name')}}">
          <span class="logo-symbol" class="hide-min-m"><strong>S</strong></span>
        <span class="hide-max-m">snippman</span>
      </a>
    </div>
    <!-- Search -->
    <div id="headerPrimary">
      <form action="{{route('snippetsSearch')}}" method="get">
      @include('components.search.search')
    </form>
    </div>
     <!-- Secondary -->
    <nav id="headerSecondary">
    <button class="button is-text toggler" type="button" aria-controls="headerSecondaryNav">
      <i class="fas fa-ellipsis-v"></i></button>
      <nav id="headerSecondaryNav">
        <ul>
          <li>
            <a href="{{ route('snippmanAbout')  }}"><i class="fas fa-info-circle"></i> <span>{{__('about')}}</span></a>
          </li>
          <li>
            <a href="{{ route('snippmanContact')  }}"><i class="fas fa-envelope"></i> <span>{{__('contact')}}</span></a>
          </li>
          <li>
            <a href=" https://gist.github.com/vades" target="_blank"><i class="fab fa-github"></i> <span>GitHub</span></a>
          </li>
         
        </ul>
      </nav>
      
    </nav>
  </section>

</header>
