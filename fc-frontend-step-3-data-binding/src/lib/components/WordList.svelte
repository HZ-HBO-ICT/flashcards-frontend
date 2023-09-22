<script>
  export let header;
  export let listItems;
</script>

<div class="mt-10">
  <h4 class="text-lg font-semibold">{header}</h4>
  <ul class="list-disc list-inside font-extralight">
    {#each listItems as listItem}
      <li>{listItem.word}</li>
    {/each}
  </ul>
</div>
