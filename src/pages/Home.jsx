import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Home = ({ cart, setOpenModel }) => {
    return (
        <>
            <NavBar cart={cart} setOpenModel={setOpenModel} />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Home;