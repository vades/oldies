@if(file_exists($path))
<span class="svg-img {{ $class }}">
    <?php include $path; ?>
</span>
@endif