<script>
  export let type = 'primary';
  export let inverse = false;
</script>

<button class:inverse={inverse} class={type} on:click>
  <slot></slot>
</button>
<style>
button {
  color: white;
  outline: none;
  padding-inline: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  background-color: hotpink;
  margin-block-start: 1rem;
  border: none;
}

button:hover {
  background-color: rgb(247, 46, 146);
}

button:disabled {
  color: #999;
}

button:focus,
button:active {
  border-color: purple;
  border-width: 1px;
}

.secondary{
  background-color: lightseagreen;
}
.secondary:hover,
.secondary:focus{
  background-color: rgb(2, 122, 116);
}
.primary.inverse{
  color: hotpink;
  background: white;
  border: 2px solid hotpink;
}
.primary.inverse:hover,
.primary.inverse:focus{
  background-color: rgb(247, 46, 146);
  color: white;
}
.secondary.inverse{
  color: lightseagreen;
  background: white;
  border: 2px solid lightseagreen;
}
.secondary.inverse:hover,
.secondary.inverse:focus{
  background: rgb(2, 122, 116);
  color: white;
}
</style>