import "./App.css";
import Header from "./Header";
import HeroHeader from "./main/HeroHeader";
import Services from "./main/Services";
import Works from "./main/Works";
import Feature from "./main/Feature";
import Virtual from "./main/Virtual";
import Install from "./main/Install";
import Events from "./main/Events";
import Appointment from "./main/Appointment";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <HeroHeader />
                <Services />
                <Works />
                <Feature />
                <Virtual />
                <Install />
                <Events />
                <Appointment />
            </div>
            <Footer />
        </div>
    );
}

export default App;
