<script>
  import { sessionScore } from '../stores/SessionScoreStore';
  import { message } from '../stores/MessageStore';
  import Hint from './components/Hint.svelte';
  import { createEventDispatcher } from 'svelte';
  import MessageBox from './components/MessageBox.svelte';
  const dispatch = createEventDispatcher();

  export function clearForm() {
    console.log('clearing a form');
    writtenAnswer = '';
  }

  let writtenAnswer = ''; // the answer in the form field
  let answerWasRight = false;
  /**
   * Some considerations
   * Where to put the business logic for
   * 1 - checking if the answer is right
   * 2 - for updating the session in the store.
   * These are all design decisions. Some are good and some are better 😀
   */

  function checkAnswer() {
    if (writtenAnswer != '') {
      if ($sessionScore.currentPlayableWord.word == writtenAnswer) {
        answerWasRight = true;
      } else {
        answerWasRight = false;
      }
      dispatch('checkAnswerClicked', {
        answer: answerWasRight,
      });
    } else {
      $message.text = 'your answer is empty';
    }
  }
</script>

<div class="questions w-full flex flex-col items-center">
  <h2 class="text-2xl text-center mt-10">
    What is the Enlish translation of this word
  </h2>
  <p class="mt-10 text-4xl inline-block bg-teal-100 p-5 rounded-md">
    {$sessionScore.currentPlayableWord.description}
  </p>
  <div class="relative z-0 lg:w-4/6 mb-6 group mt-10">
    <input
      bind:value={writtenAnswer}
      type="email"
      name="floating_text"
      id="floating_text"
      class="block py-2.5 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required
    />
    <label
      for="floating_text"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Your answer!</label
    >
  </div>
  <div class="hidden">{$sessionScore.currentPlayableWord.word}</div>
  <button on:click={checkAnswer} class="mt-5 text-4xl rounded-full bg-white p-2"
    ><i class="fa-solid fa-angles-right" /></button
  >
  <Hint />
</div>
