<script>
  import {createEventDispatcher} from 'svelte';

  let dispatch = createEventDispatcher();

  let title;
  let author;
  let year;
  let genres = [];
  let isFav;
  // let Fantasy = false;
  let id = 4;


  const handleSubmit = () => {
    id++;
    console.log('ID:', id)

    const newBook = {
      title: title,
      genre: genres.join(', '),
      author: author,
      year: year,
      favorite: isFav,
      id: id,
    }
    dispatch('addBook', newBook);
  }
</script>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="title" bind:value={title}/>
  <input type="text" placeholder="author" bind:value={author}/>
  <input type="number" placeholder="year" bind:value={year} min="1400"/>
  <p>Genre:
    <!-- <input type="checkbox" bind:checked={Fantasy}/> Fantasy-->
    <br/>
    <label>
      <input type="checkbox" bind:group={genres} value='Fantasy'/>
      Fantasy
    </label>
    <label>
      <input type="checkbox" bind:group={genres} value='Fiction'/>
      Fiction
    </label>
    <label>
      <input type="checkbox" bind:group={genres} value='Science Fiction'/>
      Science Fiction
    </label>
    <label>
      <input type="checkbox" bind:group={genres} value='Historical Fiction'/>
      Historical Fiction
    </label>
    <label>
      <input type="checkbox" bind:group={genres} value='Boring.....'/>
      Boring
    </label>
  </p>
  <label>Is It A Favorite?
    <select bind:value={isFav}>
      <option value={true}>Yes</option>
      <option value={false}>No</option>
    </select>
  </label>
  <button>Add Book</button>
</form>
<style>
  button{
    margin-block-start: 1rem;
  }
  label{
    display: inline;
    margin-inline: .5rem;
  }
</style>