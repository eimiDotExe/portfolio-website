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


      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien sollicitudin, dapibus arcu eget, elementum lectus. Quisque ac tellus egestas, mattis augue ut, consequat risus. Praesent ac commodo velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis blandit erat eget mollis. Pellentesque ultricies erat vitae erat ultrices imperdiet. Sed consectetur lectus turpis, nec hendrerit lacus iaculis vulputate. Etiam libero felis, tempus nec ex sit amet, condimentum semper odio.
      </p>

    </div>
  )
};

export default ModalPage