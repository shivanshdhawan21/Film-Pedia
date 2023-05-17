import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Trending from "./components/Pages/Trending/Trending"
import Movies from "./components/Pages/Movies/Movies"
import Series from "./components/Pages/Series/Series"
import Search from "./components/Pages/Search/Search"
function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />}/>
            <Route path="/movies" element={<Movies />}/>
            <Route path="/series" element={<Series />}/>
            <Route path="/search" element={<Search />}/>
          </Routes>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
