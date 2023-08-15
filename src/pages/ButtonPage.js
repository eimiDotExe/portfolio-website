import Button from "../components/Button";
import { BiDizzy, BiGhost, BiHappyBeaming, BiWinkTongue, BiUpsideDown } from "react-icons/bi";


function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <BiWinkTongue />
          yess girl slay
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          <BiGhost />
          hide ads!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <BiHappyBeaming />
          yay!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <BiDizzy />
          OMG! care..
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <BiUpsideDown />
          nooooo ._.
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;