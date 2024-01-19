import './App.css';
import jessicaProfile from './assets/images/avatar-jessica.jpeg';

function App() {
  return (
    <div className="App">
      <img src={jessicaProfile} alt="Jessica's profile" className="profile__picture"/>
      <h1 className="profile__title">Jessica Randall</h1>
      <h2 className="profile__subtitle">London, United Kingdom</h2>
      <h2 className="profile__description">"Front-end developer and avid reader."</h2>
      <div className="buttons">
        <button className="button">Github</button>
        <button className="button">Frontend Mentor</button>
        <button className="button">LinkedIn</button>
        <button className="button">Twitter</button>
        <button className="button button__instagram">Instagram</button>
      </div>
    </div>
  );
}

export default App;
