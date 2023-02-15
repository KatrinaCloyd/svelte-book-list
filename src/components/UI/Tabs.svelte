<script>
  //props
  export let items;
  export let activeTab;

  import {createEventDispatcher} from 'svelte';
  let dispatch = createEventDispatcher();

</script>
<ul>
  {#each items as item}
    <li
      class:active={item === activeTab}>
      <button on:click={()=>dispatch('tabChange',item)}
        on:keypress|preventDefault={()=>dispatch('tabChange',item)}>
        {item}
      </button>
    </li>
  {/each}
</ul>
<style>
  ul{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-block-end: 1.5rem;
  }
  button{
    cursor: pointer;
    transition: all .25s ease;
    outline: none;
    border: none;
    border-bottom: transparent solid 2px;
    background-color: transparent;
    color: inherit;
    margin-bottom: 0;
  }
  button:hover,
  button:focus{
    color: hotpink;
  }
  .active{
    color: hotpink;
    border-bottom: hotpink solid 2px;
  }
</style>