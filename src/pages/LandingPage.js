import { BiAtom, BiAward, BiLeaf } from "react-icons/bi";

function LandingPage() {
  return (
    <div className="landing-page-div">

      <div className="landing-page-textarea">
        <BiAtom className="lp-icon" />
        <h2 className="lp-h2">React</h2>
        <p className="lp-content">Udemy Modern React 2023 course completed</p>
      </div>

      <div className="landing-page-textarea">
        <BiLeaf className="lp-icon" />
        <h2 className="lp-h2">Always learning</h2>
        <p className="lp-content">Having a critical eye on every website to spot improvements</p>
      </div>

      <div className="landing-page-textarea">
        <BiAward className="lp-icon" />
        <h2 className="lp-h2">Bootcamp</h2>
        <p className="lp-content"> Udemy "The Web Development Bootcamp 2023" front-end completed</p>
      </div>
    </div>
  )
};

export default LandingPage;