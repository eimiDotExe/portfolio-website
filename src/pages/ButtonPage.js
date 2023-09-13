import Button from "../components/Button";
import { BiDizzy, BiGhost, BiHappyBeaming, BiWinkTongue, BiUpsideDown } from "react-icons/bi";


function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <BiWinkTongue />
          add to cart!
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
          danger!
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <BiUpsideDown />
          error!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;