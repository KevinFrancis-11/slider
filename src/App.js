import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
