import '../App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AllCommentsPage} from "../pages/allComments";
import {DetailedCommentPage} from "../pages/detailedComment";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllCommentsPage/>}/>
                <Route path="/detailedComment" element={<DetailedCommentPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
