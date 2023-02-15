<script>
  import ModalOne from "./ModalOne.svelte"
  import ModalTwo from "./ModalTwo.svelte"
  import BookForm from './BookForm.svelte'
  import Button from "./UI/Button.svelte";
  import {createEventDispatcher} from 'svelte';
  let dispatch = createEventDispatcher();

  let showModalOne = false;
  const toggleModalOne = () => {
    showModalOne = !showModalOne
  }

  let showModalTwo = false;
  const toggleModalTwo = () => {
    showModalTwo = !showModalTwo
  }

  const handleAddBook = (e) => {
    const book = e.detail;
    toggleModalTwo();
    dispatch('addNewBook', book);
  }
</script>
<header>
  <img src="/images/book-logo.svg" alt='book logo' />
  <h1>To Be Read.... </h1>
  <div>
    <Button on:click={toggleModalOne}>Show Modal One</Button>
    <Button on:click={toggleModalTwo}>Add Book Modal</Button>
  </div>
  <!-- Props syntax showModal={showModal} same as just {showModal}  ||  on:click is event forwarding -->
  <ModalOne message="Modal ONE message here!" isPromo={true} showModal={showModalOne} on:click={toggleModalOne}/>
  <!-- event dispatching for form submit -->
  <ModalTwo isPromo={false} showModal={showModalTwo} on:click={toggleModalTwo}>
    <BookForm on:addNewBook={handleAddBook} />
    <div slot="heading">
      <h3>Modal Two</h3>
    </div>
  </ModalTwo>
</header>
<style>
  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block-end: 1.5rem;
    background-color: white;
  }
  img{
    height: 150px;
    margin-inline-end: 3rem;
  }
</style>