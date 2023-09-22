<script>
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
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Flashcards - step 1" />
</svelte:head>

<nav class="fixed z-10 top-0 left-0 right-0 flex flex-col lg:flex-row lg:justify-between justify-center bg-gradient-to-r from-white p-5">
  <div class="logo">
    <h2 class="text-2xl text-center">
      <i class="icon fa-regular fa-lightbulb text-teal-400 mr-2" />Flashcards
    </h2>
    <p class="breadcrumbs text-center">Flashcards / play</p>
  </div>
  <div class="mt-3">
    <ul class="flex justify-center">
      <li class="mr-10 flex flex-col text-center">
        <i class="fa-solid fa-chart-pie text-4xl text-green-300" /><span
          >40/50</span
        >
      </li>
      <li class="mr-10 flex flex-col text-center">
        <i class="fa-solid fa-heart text-4xl text-red-600" /><span>4/4</span>
      </li>
      <li class="mr-10 flex flex-col text-center">
        <i
          class="fa-solid fa-triangle-exclamation text-4xl text-teal-500"
        /><span>4/4</span>
      </li>
      <li class="mr-10 flex flex-col text-center">
        <i
          class="fa-solid fa-briefcase-medical text-4xl text-violet-500"
        /><span>1/4</span>
      </li>
    </ul>
  </div>
</nav>
<div class="relative h-screen w-full mx-auto flex flex-col">
  <section class="flex flex-col flex-col-reverse lg:flex-row">
    <sidebar class="p-6 bg-white lg:w-80 flex flex-col justify-end">
      <div class="progress flex flex-col mt-4">
        <div>
          <h4 class="text-lg font-semibold">Last words learned</h4>
          <ul class="list-disc list-inside font-extralight">
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
            <li>list item 4</li>
            <li>list item 5</li>
          </ul>
        </div>
        <div class="mt-4 lg:mt-10">
          <h4 class="text-lg font-semibold">Difficult words</h4>
          <ul class="list-disc list-inside font-extralight">
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
            <li>list item 4</li>
            <li>list item 5</li>
          </ul>
        </div>
        <div class="mt-4 lg:mt-10">
          <p><i class="fa-solid fa-arrow-right-from-bracket mr-3" />logout</p>
        </div>
      </div>
    </sidebar>
    <div class="seperator hidden lg:block" />
    <section class="p-6 bg-cyan-400 w-full mt-40 lg:mt-0 flex flex-col justify-center">
      <div class="questions w-full flex flex-col items-center">
        <h2 class="text-2xl text-center mt-10">
          What is the Enlish translation of this word
        </h2>
        <p class="mt-10 text-4xl inline-block bg-teal-100 p-5 rounded-md">
          Uitvoeren
        </p>
        <div class="relative z-0 lg:w-4/6 mb-6 group mt-10">
          <input
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
        <button class="mt-5 text-4xl rounded-full bg-white p-2"
          ><i class="fa-solid fa-angles-right" /></button
        >
        <button
          class="mt-10 font-extralight rounded-full bg-yellow-200 px-5 py-2"
          >Use hint</button
        >
        <div id="hint" />
      </div>
    </section>
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
