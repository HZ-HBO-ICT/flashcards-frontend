<script>
  /**
   * Some considerations
   * Obviously we would like to fire endsession here as well.
   * U can use getContext.
   * We choose to use dispatch event and handle the event.
  */
  import { sessionScore } from '../../stores/SessionScoreStore';
  import { createEventDispatcher } from 'svelte';

  const sentence = $sessionScore.currentPlayableWord.sentence;
  const word = $sessionScore.currentPlayableWord.word;
  const hint = sentence.replace(word, '****');
  
  const dispatch = createEventDispatcher();
  let divElement;

  function showHint() {
    console.log('hint clicked', divElement);
    divElement.classList.remove('hidden');
    $sessionScore.hintsLeft = $sessionScore.hintsLeft - 1;
    //dispatch('displayHints');
  }
</script>

<button
  on:click|once={showHint}
  class="mt-10 font-extralight rounded-full bg-yellow-200 px-5 py-2"
  >Use hint</button
>
<div bind:this={divElement} id="hint" class="hidden mt-4">{hint}</div>
