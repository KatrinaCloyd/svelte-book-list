<script>
  // export keyword means this is a prop coming from in
  export let isPromo = false;
  export let showModal = false;

  // on:click|self is an event modifier to mean only clicking on its self

</script>
{#if showModal}

  <!-- on:click without function is registering a click event that then can be defined in the parent -->
  <div class='background' on:click|self on:keyup>
    <div class="modal" class:promo={isPromo}>
      <slot name="heading"></slot>
      <slot></slot>
    </div>
  </div>
{/if}
<style>
  .background{
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    background: rgba(31, 15, 63, 0.7);
    z-index: 20;
  }
  .modal{
    padding: 3rem;
    width: 60vw;
    background-color: white;
    margin: 10% auto;
    border-radius: 20px;
  }
  .promo{
    outline: purple solid 5px;
    outline-offset: -10px;
  }
</style>