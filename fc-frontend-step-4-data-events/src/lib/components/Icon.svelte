<script>
  export let type;
  export let color;
  export let store;
</script>

<li class="mr-10 flex flex-col text-center">
  <i class="fa-solid {type} text-4xl {color}" /><span>{$store.current}/{$store.max}</span>
</li>
