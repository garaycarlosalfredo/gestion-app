import logo from "./logo.svg";
import "./App.css";
import {
  DefaultButton,
  NavBar,
  ThemeButton,
} from "./components/core/components";
const themes = require("./theams/themes.json");

const onclick = () => {
  console.log("hola a");
};

function App() {
  const { defaultTheme } = themes;
  //console.log("defaultTheme", defaultTheme);

  return (
    <div className="App">
      <NavBar navBarClass={"bg-light-gray"}>
        <div className="flex">
          <div className="ma2">Check tachyons</div>
          <div className="ma2">Check tachyons</div>
          <div></div>
          <ThemeButton
            theme={defaultTheme}
            ButtonClasses={"ma2 w-10 ml-auto"}
            onclickAction={onclick}
          >
            Boton
          </ThemeButton>
        </div>
      </NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
