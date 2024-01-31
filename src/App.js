import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookLIst";
// import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div>
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main>
        <BookList />
        {/* <AllTheBooks /> */}
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
