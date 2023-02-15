<script>
  export let book;
  import {createEventDispatcher} from 'svelte';
  import Button from './UI/Button.svelte';
  let dispatch = createEventDispatcher();

  //reactive value
  $: totalRecs = book.rec + book.doNotRec;
  $: yesRec = Math.floor(100 / totalRecs * book.rec);
  $: noRec = Math.floor(100 / totalRecs * book.doNotRec);
  
  
  const handleRec = (option, id) => {
    dispatch('recommend', {option, id});
  }
  const handleDelete = (id) => {
    dispatch('delete', id);
  }
</script>
<section class='book-card'>
  <div>
    <h3>{book.title}</h3>
    <p>By {book.author}</p>
    <p class='genre'>{book.genre}</p>
  </div>
  <div class='vote-block'>
    <p>Would you recommend it?</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button class='rec' on:click={() => {handleRec('rec', book.id)}}>
      <span class='votes' style="width: {yesRec}%"></span>
      <span class='text'>Yes {book.rec}</span>
    </button>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button class='rec' on:click={() => {handleRec('doNotRec', book.id)}}>
      <span class='text'>No {book.doNotRec}</span>
      <span class='votes' style="width: {noRec}%"></span>
    </button>
    <div>Total Recomendations: {totalRecs}</div>
    <Button inverse on:click={() => handleDelete(book.id)}>Delete Book</Button>
  </div>
</section>
<style>
  .book-card{
    border: purple solid 1px;
    background-color: white;
    padding: 1rem;
    width: 275px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    height: 100%;
  }
  h3{
    margin-block-end: .5rem;
    color: rgb(247, 46, 146);
    padding-block-end: .5rem;
    border-bottom: solid 1px hotpink;
  }
  .genre{
    margin-block-start: .25rem;
    font-size: small;
    font-style: italic;
  }
  .vote-block{
    margin-block-start: 1rem;
    font-size: smaller;
  }
  .rec{
    width: 100%;
    background-color: rgb(247, 46, 146);
    margin-block: 5px;
    color: white;
    padding: 5px;
    border: solid 3px hotpink;
    position: relative;
    border-radius: 5px;
    transition: all .25s ease;
  }
  .rec:hover{
    cursor: pointer;
    border: solid 3px purple;
  }
  .rec:focus,
  .rec:active{
    border: solid 3px purple;
  }
  .votes{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: purple;
    z-index: 0;
    transition: all .25s ease-in-out;
  }
  .text{
    position: relative;
    z-index: 5;
  }
</style>