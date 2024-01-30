import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import AllTheBooks from "./AllTheBooks";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main>
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
