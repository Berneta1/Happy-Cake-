import Form from 'react-bootstrap/Form';

function Contacto() {
  return (
    <Form>
        <main>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escribenos un mensaje</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <img src='https://img.freepik.com/premium-vector/cake-shop-logo-planetary-stationary-dough-mixer-cake-berries_528132-158.jpg?w=1380' alt='Happy cake'></img>
      </main>
    </Form>
  );
}



export default Contacto 