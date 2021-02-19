<ul class="cards child-cols-1 child-cols-s-2 child-cols-m-4 child-cols-l-6">
    @foreach($places as $place)
    <li class="card">
        <header>
            <a href="{{ route('ivn.place', ['slug' => $place->slug])  }}">
                <img src="{{ asset('img/placeholder.png') }}" alt="{{$place->title}}">
            </a>
        </header>
        <article class="content">
            <!-- <div>
                {{$place->excerpt}}
            </div> -->
            <footer>
                <a href="{{ route('ivn.place', ['slug' => $place->slug])  }}">{{$place->title}}</a>
            </footer>

        </article>
    </li>
    @endforeach
</ul>