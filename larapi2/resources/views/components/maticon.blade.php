@if(file_exists($path))
<span class="maticon {{ $class }}">
    <?php include $path; ?>
</span>
@endif