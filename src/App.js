import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return (
    <div>
     <h1>Welcome Back {props.username}</h1>
    </div>
  );
}


function App(){
  return(
    <div>
      <Welcome username="tehreem"/>
    </div>
  );
}

export default App;
