<script>
  import BookDetail from "./BookDetail.svelte";
  import {fade, slide, scale } from "svelte/transition";
  import {flip} from 'svelte/animate'
  export let books = [];
</script>
<section>
  <div class="book-list">
    {#each books as book (book.id)}
      <div out:scale|local animate:flip={{duration: 500}}>
        <BookDetail {book} on:recommend on:delete />
      </div>
    {/each}
  </div>
</section>
<style>
  .book-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-block-start: .5rem;
  }
</style>