<script>
  import Logout from '$lib/Logout.svelte';
  import Navigation from '$lib/Navigation.svelte';
  import WordList from '$lib/components/WordList.svelte';
  import Question from '$lib/Question.svelte';

  /**
   * This dataset will preferably be loaded in via serverside request to a db or an API call
   * or you can use stores.
   */
  const wordsAndTheirMeaning = {
    meta: {
      date: Date.now(),
      topic: 'English',
      objective: {
        description: 'Can you translate the words to English?',
        translateTo: 'Dutch',
      },
      level: 'HAVO',
      year: 3,
    },
    data: [
      {
        word: 'necessary',
        description: 'nodig',
        sentence: 'Is it necessary to tune your guitar',
      },
      {
        word: 'perform',
        description: 'uitvoeren',
        sentence: 'I would like to perform this poem for my mothers funeral',
      },
      {
        word: 'possible',
        description: 'mogelijk',
        sentence: 'Is it possible to sing at your birthday?',
      },
      {
        word: 'practise',
        description: 'oefenen',
        sentence: 'I have to practise a lot to become an expert',
      },
      {
        word: 'atmosphere',
        description: 'sfeer',
        sentence: 'The atmosphere in this building is really intimidating',
      },
      {
        word: 'crowded',
        description: 'druk',
        sentence: 'Rotterdam is a really crowded city',
      },
      {
        word: 'terrible',
        description: 'verschrikkelijk (slecht)',
        sentence: 'This album by the Foo Fighters is terrible',
      },
      {
        word: 'transport',
        description: 'vervoer',
        sentence: 'What is your favourite transport? Mine is a BMW Z3',
      },
      {
        word: 'poor',
        description: 'slecht',
        sentence: 'Ajax played really poor today. The lost 1-0',
      },
      {
        word: 'repetitive',
        description: 'eentonig',
        sentence: 'This is a really repetitive sound, i like it?',
      },
    ],
  };
  const difficultWords = {
    meta: {
      lastTimeTried: 'today',
    },
    data: [
      {
        word: 'transport',
        description: 'vervoer',
        sentence: 'What is your favourite transport? Mine is a BMW Z3',
      },
      {
        word: 'poor',
        description: 'slecht',
        sentence: 'Ajax played really poor today. The lost 1-0',
      },
      {
        word: 'repetitive',
        description: 'eentonig',
        sentence: 'This is a really repetitive sound, i like it?',
      },
    ],
  };

  const lastLearnedWords = {
    meta: {
      lastTimeTried: 'today',
    },
    data: [
      {
        word: 'necessary',
        description: 'nodig',
        sentence: 'Is it necessary to tune your guitar',
      },
      {
        word: 'perform',
        description: 'uitvoeren',
        sentence: 'I would like to perform this poem for my mothers funeral',
      },
      {
        word: 'possible',
        description: 'mogelijk',
        sentence: 'Is it possible to sing at your birthday?',
      },
    ],
  };

  const randomQuestion = () => {
    return wordsAndTheirMeaning.data[Math.floor(Math.random() * wordsAndTheirMeaning.data.length)];
  }

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Flashcards - step 1" />
</svelte:head>

<Navigation />

<div class="relative h-screen w-full mx-auto flex flex-col">
  <section class="flex flex-col flex-col-reverse lg:flex-row">
    <sidebar class="p-6 bg-white lg:w-80 flex flex-col justify-end">
      <div class="progress flex flex-col mt-4">
        <WordList header={'Last words learned'} listItems={lastLearnedWords.data}/>
        <WordList header={'Difficult words'} listItems={difficultWords.data}/>
        <Logout />
      </div>
    </sidebar>
    <div class="seperator hidden lg:block" />
    <Question {...randomQuestion()}/>
  </section>
</div>

<style>
  /**
  * I did something tricky here, borrought it from: https://www.youtube.com/watch?v=uPiDzFBhvqk
  */
  .seperator {
    width: 0;
    height: 0;
    z-index: 5;
    border-bottom: 100vh solid transparent;
    border-left: 10vw solid rgb(255, 255, 255);
    margin-right: -9.9vw;
  }
</style>
