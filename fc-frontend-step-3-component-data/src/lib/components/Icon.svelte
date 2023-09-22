<script>
  export let type;
  export let color;
  export let maxAmount = 4;
  export let currentAmount;
</script>

<li class="mr-10 flex flex-col text-center">
  <i class="fa-solid {type} text-4xl {color}" /><span>{currentAmount}/{maxAmount}</span>
</li>
