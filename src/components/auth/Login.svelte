<script>
  import identity from "../../api/identity";

  let email;
  let password;
  let promise;

  function signUp() {
    promise = identity.signup(email, password);
  }

  function loginWithEmail() {
    promise = identity.login(email, password, false);
  }

  function loginWithGoogle() {
    window.location.href = identity.loginExternalUrl("google");
  }

  function gotoApp() {
    window.location.href = "/";
  }
</script>

<label for="email">Email:</label>
<input name="email" bind:value={email} type="text" />

<label for="password">Password:</label>
<input name="password" bind:value={password} type="text" />

<button on:click={signUp}>Create Account</button>
<button on:click={loginWithEmail}>Login with email</button>
<button on:click={loginWithGoogle}>Login with Google</button>

{#if promise}
  {#await promise}
    <p>Waiting...</p>
  {:then}
    <p>Done!</p>
    <button on:click={gotoApp}>Go to app</button>
  {:catch error}
    <p>Something went wrong: {error}</p>
  {/await}
{/if}
