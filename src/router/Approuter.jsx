import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";




function Approuter() {

    return (
        <BrowserRouter>
            <Routes >
                <Route element={<Main />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default Approuter;