<script>
  import Header from './components/Header.svelte'
  import Tabs from './components/UI/Tabs.svelte'
  import BookForm from './components/BookForm.svelte'
  import BookList from './components/BookList.svelte'
  import Footer from './components/Footer.svelte'

  //tabs
  let items = ['Book List', 'Add New Book'];
  let activeTab = 'Book List';

  const tabChange = (e) => {
    activeTab = e.detail;
  }

  let books = [
    {
      title: 'The Starless Sea',
      genre: 'Fantasy Fiction',
      author: 'Erin Morgenstern',
      rec: 5, 
      doNotRec: 1,
      id: 1
    },
    {
      title: 'The Night Circus',
      genre: 'Fantasy Fiction',
      author: 'Erin Morgenstern',
      rec: 9, 
      doNotRec: 2,
      id: 2
    },
    {
      title: 'The Guernsey Literary and Potato Peel Pie Society',
      genre: 'Historical Fiction',
      author: 'Mary Ann Shaffer',
      rec: 4, 
      doNotRec: 3,
      id: 3},
  ];

  const handleAddBook = (e) => {
    console.log('handle book in app triggered')
    const book = e.detail;
    books = [book, ...books];
    activeTab = 'Book List';
  }
  const handleRec = (e) => {
    const {option, id} = e.detail;
    let newBooks = [...books];
    let updateBook = newBooks.find((book)=> book.id === id)
    updateBook[option]++;
    books = newBooks;
  }
  const handleDelete =(e)=>{
    const id = e.detail;
    let newBooks = [...books];
    books = newBooks.filter((book)=> book.id !== id);
  }

</script>
<Header on:addNewBook={handleAddBook}/>
<main>
  <Tabs {items} {activeTab} on:tabChange={tabChange}/>
  {#if activeTab === items[0]}
    <!-- This uses books from the store can access 
      the data directly rather than passing as props
    <BookList on:recommend={handleRec}/> -->
    <!-- This Passes books as a prop -->
    <BookList {books} on:recommend={handleRec} on:delete={handleDelete}/> 
  {:else}
    <BookForm on:addNewBook={handleAddBook}/>
  {/if}

</main>
<Footer/>
<style>
  main{
    text-align: center;
    width: 100%;
    max-width: 960px;
    margin: 1.5rem auto;
    flex-grow: 1;
  }
</style>