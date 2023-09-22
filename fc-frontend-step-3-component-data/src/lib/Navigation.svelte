<script>
  import Icon from "./components/Icon.svelte";

  const iconHealth = {
    type: 'fa-heart',
    color: 'text-red-600',
    currentAmount: 4
  }
  const iconUsedHints = {
    type: 'fa-briefcase-medical',
    color: 'text-violet-500',
    currentAmount: 1
  }
  const iconAmountOfWords = {
    type: 'fa-chart-pie',
    color: 'text-green-300',
    maxAmount: 50,
    currentAmount: 30
  }

  const iconWrongWords = {
    type: 'fa-triangle-exclamation',
    color: 'text-teal-500',
    currentAmount: 4
  }
</script>

<nav class="fixed z-10 top-0 left-0 right-0 flex flex-col lg:flex-row lg:justify-between justify-center bg-gradient-to-r from-white p-5">
    <div class="logo">
      <h2 class="text-2xl text-center">
        <i class="icon fa-regular fa-lightbulb text-teal-400 mr-2" />Flashcards
      </h2>
      <p class="breadcrumbs text-center">Flashcards / play</p>
    </div>
    <div class="mt-3">
      <ul class="flex justify-center">
        <Icon {...iconAmountOfWords}/>
        <Icon {...iconHealth} />
        <Icon {...iconWrongWords} />
        <Icon {...iconUsedHints} />
      </ul>
    </div>
  </nav>