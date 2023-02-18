import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router";
import Home from "./components/mainComponents/Home";

function App() {
    return (
        <>
            <Header></Header>
            {/*<Main></Main>
            <Sidebar></Sidebar>
            <Footer></Footer>*/}
            <Routes>
                <Route path='/' exact element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
