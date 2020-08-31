<section class="panel-card">
@foreach($snippets as $snippet)
<article>
<section>
<figure>
<a href="{{ route('snippet', ['slug' => $snippet->slug])  }}">
<img class="Media-figure" src="{{$snippet->img}}" alt="">
</a>
</figure>
<header>
  <a href="{{ route('snippet', ['slug' => $snippet->slug])  }}">{{ $snippet->title}}</a><i class="fas fa-chevron-right hide-min-s"></i>
</header>
</section>

<div class="body">

<footer>
  <span>{{$snippet->category_name}}</span>
  
</footer>
</div>
 
</article>
@endforeach
</section>
