<section
  class="p-6 bg-cyan-400 w-full mt-40 lg:mt-0 flex flex-col justify-center"
>
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
    <button class="mt-10 font-extralight rounded-full bg-yellow-200 px-5 py-2"
      >Use hint</button
    >
    <div id="hint" />
  </div>
</section>
