<script>
  import Icon from './components/Icon.svelte';
  import {
    healthIconStore,
    wordsIconStore,
  } from '../stores/SessionScoreStore';

  /**
   * I really do not like this setup. It feels like too much.
   * Can you do it better?
   *
   * A store is used to update changed state between components.
   */
  const iconHealth = {
    type: 'fa-heart',
    color: 'text-red-600',
    store: healthIconStore,
  };

  const wordsIcon = {
    type: 'fa-briefcase-medical',
    color: 'text-violet-500',
    store: wordsIconStore,
  };

  //TODO: improve these

  // const iconAmountOfWords = {
  //   type: 'fa-chart-pie',
  //   color: 'text-green-300',
  //   maxAmount: $sessionScore.amountOfWordsToLearn,
  //   currentAmount: $sessionScore.currentWordCount,
  // };

  // const iconWrongWords = {
  //   type: 'fa-triangle-exclamation',
  //   color: 'text-teal-500',
  //   currentAmount: $sessionScore.amountOfWrongAnswers,
  // };
</script>

<nav
  class="fixed z-10 top-0 left-0 right-0 flex flex-col lg:flex-row lg:justify-between justify-center bg-gradient-to-r from-white p-5"
>
  <div class="logo">
    <h2 class="text-2xl text-center">
      <i class="icon fa-regular fa-lightbulb text-teal-400 mr-2" />Flashcards
    </h2>
    <p class="breadcrumbs text-center">Flashcards / play</p>
  </div>
  <div class="mt-3">
    <ul class="flex justify-center">
      <Icon
        type={iconHealth.type}
        color={iconHealth.color}
        store={iconHealth.store}
      />
      <Icon
        type={wordsIcon.type}
        color={wordsIcon.color}
        store={wordsIcon.store}
      />
      <!-- <Icon
        bind:type={iconAmountOfWords.type}
        bind:color={iconAmountOfWords.color}
        bind:maxAmount={iconAmountOfWords.maxAmount}
        bind:currentAmount={$sessionScore.currentWordCount}
      /> -->
      <!-- <Icon
        bind:type={iconHealth.type}
        bind:color={iconHealth.color}
        bind:currentAmount={$sessionScore.health}
      />
      <Icon
        bind:type={iconWrongWords.type}
        bind:color={iconWrongWords.color}
        bind:currentAmount={$sessionScore.amountOfWrongAnswers}
      />
      <Icon
        bind:type={iconUsedHints.type}
        bind:color={iconUsedHints.color}
        bind:currentAmount={$sessionScore.hintsLeft}
      /> -->
      <!-- u could use the spread operator, however the binding will not work <Icon {...iconUsedHints} /> -->
    </ul>
  </div>
</nav>
