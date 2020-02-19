import nav from '../components/nav';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const About = () => (
  <div className = "hero" >
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>

        {/* <Modal.Body>
          <p></p>
        </Modal.Body> */}
        <div  className = "btnreg">
          <Modal.Body>
            <Button variant="primary">Login</Button>
            <Button variant="primary">Signup</Button>
          </Modal.Body>
        </div>
      </Modal.Dialog>
  </div>
  );

  <style jsx >
      {`
        .hero {
            display :"flex";
            justifycontent :"center";
            alignitems: "center";

        }
        .btnreg {
          display: flex;
          justify-Content : "space_Between";
          align-Itmes : "center";
          font-size: 50px;
        }
      `}
  </style>
  
  export default About;
  