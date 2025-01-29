import '../App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AllCommentsPage} from "../pages/allComments";
import {DetailedCommentPage} from "../pages/detailedComment";
import {Header} from "../widgets/header";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<AllCommentsPage/>}/>
                <Route path="/detailedComment" element={<DetailedCommentPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
