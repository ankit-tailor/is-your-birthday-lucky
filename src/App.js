import { useState } from "react";
import "./App.css";
import lucky from "./assets/lucky.png";
import happy from "./assets/happy.gif";
import sad from "./assets/sad.gif";

function App() {
  const [birthDate, setBirthDate] = useState(null);
  const [luckyNumber, setLuckyNumber] = useState("");
  const [dissmissedPolicy, setDissmissedPolicy] = useState(false);
  const [outputMessage, setOutputMessage] = useState([])

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleNumberChange = (e) => {
    setLuckyNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const birthArray = birthDate.split("-");
    let sumOfBirthDigits = 0;
    birthArray.map((number) => {
      sumOfBirthDigits += getSumOfDigits(number)
    })

    if (sumOfBirthDigits % luckyNumber === 0) {
      setOutputMessage([`Woahhh, you are lucky person!!!`, happy])
    } else {
      setOutputMessage([`Oopss, your birthday is not a lucky number!!!`, sad])
    }


  };

  const getSumOfDigits = (number) => {
    let sum = 0;
    while (Math.floor(number)) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }

  return (
    <div className="App">
      <div className="main">
        {dissmissedPolicy && <p style={{ textDecoration: "underline", cursor: "pointer", position: "relative" }} onClick={() => setDissmissedPolicy(false)}>Read Policy</p>}
        <h1>Is your birthday lucky ? 🤔</h1>
        {!dissmissedPolicy && (
          <div className="privacy__policy" id="privacy__policy">
            <p style={{ float: "right", cursor: "pointer", marginLeft: "5px" }}
              onClick={() => setDissmissedPolicy(true)}
            >
              X
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold" }}>Privacy policy:</span> We
              don't store any of your data!! 😎
            </p>
          </div>
        )}
        <img className="banner_image" src={lucky} alt="lucky_image" height="30%" width="50%" />
        <form onSubmit={handleSubmit}>
          <input type="date" onChange={handleDateChange} required />
          <input
            type="number"
            placeholder="Enter your lucky number"
            value={luckyNumber}
            onChange={handleNumberChange}
            required
          />
          <button>Try your luck!!</button>
        </form>
        {outputMessage.length > 0 && <div>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.3rem" }}>{outputMessage[0]}</p>
          <img style={{ borderRadius: "20px", display: "block", margin: "auto" }} src={outputMessage[1]} alt="reaction_image" height="50%" width="50%" />
        </div>}
        <footer>
          <div className="social">
            <a href="https://github.com/ankit-tailor" target="_blank" rel="noreferrer">Github</a>
            <a href="https://linkedin.com/in/ankit-tailor" target="_blank" rel="noreferrer">Linkedin</a>
            <a href="https://twitter.com/ankit__tailor" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://ankit-tailor.netlify.com" target="_blank" rel="noreferrer">Portfolio</a>
          </div>
          <hr />
          <p style={{ textAlign: "center" }}>&copy;Ankit Tailor{new Date().getFullYear()}
            | <a href="#privacy__policy" onClick={() => setDissmissedPolicy(false)}>privacy policy</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
