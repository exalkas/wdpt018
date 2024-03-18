import "./App.css";

function App() {
  return (
    <div>
      <User username="John" email="mail@1.com" />
    </div>
  );
}

export default App;

interface Props {
  username: string;
  email: string;
}

function User(props: Props): JSX.Element {
  return (
    <div>
      <h1>User Component</h1>
      <p>Username is: {props.username}</p>
      <p>Email is: {props.email}</p>
    </div>
  );
}
