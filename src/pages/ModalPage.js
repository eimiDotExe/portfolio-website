import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }
  const actionBar = <div>
    <Button onClick={handleClose} secondary rounded outline>I Accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is very important infomation! ^_^
    </p>
  </Modal>


  return (
    <div>
      {showModal && modal}
      <Button onClick={handleClick} primary rounded outline>
        Open Modal
      </Button>
    </div>
  )
};

export default ModalPage