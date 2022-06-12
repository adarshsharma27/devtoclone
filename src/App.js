import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Home from "./components/Home";

function App() {
    return (
        <>
            <TopHeader />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
