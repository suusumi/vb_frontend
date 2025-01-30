import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AllCommentsPage} from "../pages/allComments";
import {DetailedCommentPage} from "../pages/detailedComment";
import {Header} from "../widgets/header";
import {Container} from "@mui/material";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<AllCommentsPage/>}/>
                    <Route path="/comment/:id" element={<DetailedCommentPage />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App
