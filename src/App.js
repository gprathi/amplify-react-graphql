import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { LeadCreateForm } from './ui-components';

function App({ signOut, user }) {
  return (
    <div  className="App">
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <LeadCreateForm />
    </div>
  );
}

export default withAuthenticator(App);
