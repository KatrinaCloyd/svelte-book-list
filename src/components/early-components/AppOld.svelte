<script>
  import ModalOne from "../ModalOne.svelte"
  import ModalTwo from "../ModalTwo.svelte"
  import AddBookForm from "./OldBookForm.svelte"

  let books = [
    {title: 'The Starless Sea', genre: 'Fantasy Fiction', author: 'Erin Morgenstern', year: 2019, favorite: true, id: 1},
    {title: 'The Night Circus', genre: 'Fantasy Fiction', author: 'Erin Morgenstern', year: 2011, favorite: false, id: 2},
    {title: 'The Guernsey Literary and Potato Peel Pie Society', genre: 'Historical Fiction', author: 'Mary Ann Shaffer', year: 2008, favorite: false, id: 3},
  ];

  const handleClick = (id) => {
    books = books.filter((book)=> book.id !== id );
  }

  let showModalOne = false;
  const toggleModalOne = () => {
    showModalOne = !showModalOne
  }

  let showModalTwo = false;
  const toggleModalTwo = () => {
    showModalTwo = !showModalTwo
  }

  let num = 15;
  const addBook = (e) => {
    console.log(e.detail);
    const newBook = e.detail;
    books = [newBook, ...books];
    showModalTwo = false;
  }

</script>
<!-- Props syntax showModal={showModal} same as just {showModal}  ||  on:click is event forwarding -->
<ModalOne message="Modal ONE message here!" isPromo={true} showModal={showModalOne} on:click={toggleModalOne}/>
<!-- event dispatching for form submit -->
<ModalTwo isPromo={false} showModal={showModalTwo} on:click={toggleModalTwo}>
  <AddBookForm on:addBook={addBook}/>
  <div slot="heading">
    <h3>Add a new Book</h3>
  </div>
</ModalTwo>
<main>
<header>
    <h1>Book List</h1>
    <button on:click={toggleModalOne}>Show Modal One</button>
    <button on:click={toggleModalTwo}>Add Book</button>
</header>
  <!-- IF ELSE STRUCTURE -->
  <!--
  {#if num > 20}
    <p>Greater than 20!</p>
    {:else if num > 5}
    <p>Greater than 5</p>
    {:else}
    <p>Less than 5</p>
  {/if}
  -->

  <!-- how to loop -->
  {#each books as book (book.id)}
    <div class='book'>
      <h2>{book.title}</h2>
      {#if book.favorite }
        <p>A FAV!</p>
      {/if}
      <p>By {book.author} : First Published in {book.year}</p>
      <button on:click={() => handleClick(book.id)}>Delete Book</button>
    </div>
    <!--Conditional statement-->
    {:else}
    <p>Sorry... no books to show</p>
  {/each}

</main>

<style>
  main{
    text-align: center;
    padding: 1rem;
    max-width: 240px;
    margin: 0 auto;
  }
  header button {
    background-color: blueviolet;
    margin-block-end: 1.5rem;
  }
  .book{
    margin-block-end: 1.5rem;
  }
  @media (min-width: 640px){
    main{
      max-width: none;
    }
  }
</style>