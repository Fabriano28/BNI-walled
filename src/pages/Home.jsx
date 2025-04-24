import Balance from "../components/Balance";
import Filters from "../components/Filters";
import Tables from "../components/Tables";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

function Home () {
    return (
        <>
            <div className="bg-light">
                <Navbar />
                <Hero />
                <Balance />
                <Filters />
                <Tables />
            </div>
        </>
    );
}

export default Home;