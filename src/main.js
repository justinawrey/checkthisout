import './global.css';
import ConfirmSignUp from './components/auth/ConfirmSignUp.svelte';
import Login from './components/auth/Login.svelte';
import App from './components/App.svelte';

let app;

const hash = window.location.hash;
const confirmationHash = '#confirmation_token=';

if (hash.includes(confirmationHash)) {
  const token = hash.substring(confirmationHash.length, hash.length);
  app = new ConfirmSignUp({
    target: document.body,
    props: {
      token,
    },
  })
} else {
  app = new Login({
    target: document.body,
  });
}

export default app;