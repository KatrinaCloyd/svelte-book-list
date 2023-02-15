<script>
  import Button from './UI/Button.svelte'
  import {createEventDispatcher} from 'svelte';
  let dispatch = createEventDispatcher();

  let fileds={
    title: '',
    author: '',
    genre: ''
  }

  let errors = {
    title: '',
    author: '',
    genre: ''
  }
  let valid = false;

  const handleSubmit = () => {
    valid = true;
    // check that title is more than 5 long
    if(fileds.title.trim().length < 5){
      valid = false;
      errors.title = "Book Title must be at least 5 characters long."
    } else {
      errors.title = ''
    }
    // check that Ans A is 1 char long
    if(fileds.author.trim().length < 1){
      valid = false;
      errors.author = "Answer A must be at least 1 character long."
    } else{
      errors.author = ''
    }
    // check that Ans b is 1 char long
    if(fileds.genre.trim().length < 1){
      valid = false;
      errors.genre = "Answer B must be at least 1 character long."
    } else{
      errors.genre = ''
    }
    if(valid){
      //now add new book if valid
      let newBook = {
        ...fileds,
        voteA: 0,
        voteB: 0,
        id: Math.random(),
        rec: 0, 
        doNotRec: 0,
      }

      // if using data stores 
      // BookStore.update(currentBooks => {
      //  return [newBook, ...currentBooks];
      // })
      
      dispatch('addNewBook', newBook);
    }
  }
</script>
<h2>Add A New Book To Your Already Too Long List</h2>
<form on:submit|preventDefault={handleSubmit}>
  <div class="input">
    <label for="book"> Book Title:
    <input type="text" id='book' bind:value={fileds.title}/>
    <div class='error'>{errors.title}</div>
  </div>
  <div class="input">
    <label for="author" /> Author:
    <input type="text" id='author' bind:value={fileds.author}/>
    <div class='error'>{errors.author}</div>
  </div>
  <div class="input">
    <label for="ansB" /> Genre:
    <input type="text" id='ansB' bind:value={fileds.genre}/>
    <div class='error'>{errors.genre}</div>
  </div>
  <Button inverse>Add Book</Button>
</form>
<style>
  h2{
    margin-block: 1.5rem;;
  }
  .input{
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 440px;
  }
  input{
    margin-block: 0.5rem;
    margin-inline-start: .5rem;
    min-width: 350px;
  }
  .error{
    color: hotpink;
    font-size: smaller;
  }
</style>