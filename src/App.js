import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import ShowCase from './Components/ShowCase';
import {useUserGitHub} from './Providers/UserGItHub'

function App() {
  const {user} = useUserGitHub();

  return (
    <div className="App">
      <Header></Header>
      {user && <Profile></Profile>}
      {user && <ShowCase></ShowCase>}   
    </div>
  );
}

export default App;
