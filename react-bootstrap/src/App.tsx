import React, { useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = useCallback(() => {
    setShow(true);
  }, []);
  const handleClose = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <main className="app">
      <h1>Accessibility Comparison</h1>

      <Card>
        <Card.Body>
          <Button onClick={handleShow}>Pop Modal</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} aria-labelledby="modal-label">
        <Modal.Header closeButton>
          <Modal.Title id="modal-label">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                aria-describedby="email-desc"
              />
              <Form.Text className="text-muted" id="email-desc">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        praesentium nemo modi? Officia odit aliquid qui explicabo eum iure,
        voluptates dolore totam minima a voluptatum, id nostrum harum delectus.
        Quae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        possimus sunt voluptate voluptatum mollitia alias eveniet ducimus unde
        voluptas voluptatem, quidem accusamus veniam iure provident commodi
        error facilis. Aliquid, similique!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsa sint
        rem, recusandae accusamus sunt dolor pariatur aliquam sapiente nihil
        voluptates quia maiores molestiae tempora labore nostrum iusto eius
        inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quas
        accusamus expedita, vitae vel praesentium ipsa, eos quaerat accusantium
        totam architecto aliquid consectetur ut molestias. Quia aliquam quis
        dolores temporibus.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui excepturi
        cupiditate et dolores aperiam aliquam quae. Facilis labore, repellendus
        rem necessitatibus mollitia reiciendis, praesentium reprehenderit id,
        dolore nesciunt beatae numquam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis
        distinctio architecto? Ea blanditiis ab numquam doloremque suscipit esse
        adipisci vero tenetur, eum quaerat? Vel recusandae autem cupiditate sed!
        Perspiciatis.
      </p>
    </main>
  );
}

export default App;
