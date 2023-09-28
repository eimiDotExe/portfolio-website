import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import AutocompletePage from "./pages/AutocompletePage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import IntroPage from "./pages/IntroPage";
import FooterPage from "./pages/FooterPage";

function App() {
  return <div>
    <div className="fill">
      <IntroPage />
    </div>
    <LandingPage />
    <h2 className="sidebar-title">Check out some of my components!</h2>
    <div className="sidebar-container">
      <Sidebar />
      <div className="sidebar-content">
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
        <Route path="/autocomplete">
          <AutocompletePage />
        </Route>
      </div>
    </div>
    <div>
      <AboutPage />
    </div>
    <div>
      <FooterPage />
    </div>
  </div>
}

document.addEventListener('mousedown', function (event) {
  const isInput = event.target instanceof HTMLInputElement
  if (event.detail > 1 && !isInput) {
    event.preventDefault();
  }
}, false);

export default App;