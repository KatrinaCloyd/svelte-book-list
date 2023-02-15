<script>
  // prop from App.svelte
	export let name;

  let newName = "Name Here"
  let beltColor = "BLUE"
  let firstName = 'First'
  let lastName = 'Last'

  // reactive state (like comupted properties in vue)
  $: fullName = `${firstName} ${lastName}`

  // reactive statement (fires any time a vairable refernced is updated)
  $: {
    console.log(beltColor)
    console.log(lastName)
  }

  const handleClick = () => {
    beltColor = 'red'
  }
  const handleInput = (e) => {
    beltColor = e.target.value;
  }
</script>

<main>
	<h1>Hello {fullName}!</h1>
	<p style='color: {beltColor}'>Color: {beltColor}</p>
  <button on:click={handleClick}>Update Color</button>
  <!-- two way data binding -  <input type="text" on:input={handleInput} value={beltColor}> -->
  <!-- SVELTE SHORT HAND FOR 2-WAY BINDING -->
  <input type="text" bind:value={beltColor} />
  
  
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>