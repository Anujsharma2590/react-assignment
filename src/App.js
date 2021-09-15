
import './App.css';
import {Button} from './components/Button'
function App() {
  return (
    <div className="App">
      <div className="firstCol">
        <Button title="JOIN US" name="join" />
        <Button title="LOGIN" name="login" />
        <Button title="SEARCH" name="search" />
        <Button title="HOME" name="home" />
      </div>
      <div className="secCol">
        <Button title="SETTINGS" name="setting" />
        <Button title="CONTACT US" name="contact" />
        <Button title="HELP" name="help" />
        <Button title="DOWNLOAD" name="dwn" />
      </div>
    </div>
  );
}

export default App;
