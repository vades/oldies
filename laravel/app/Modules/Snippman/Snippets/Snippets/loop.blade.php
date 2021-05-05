@foreach($snippets as $snippet)
<article>
<header>
{{config('snippman.categories.'.$snippet->category)  ?: $snippet->category}}
</header>
<section>
  <h3><a href="{{ route('snippet', ['slug' => $snippet->slug])  }}">{{ $snippet->title}}</a></h3>
  {{--<footer></footer>--}}
  </section>
</article>
@endforeach
