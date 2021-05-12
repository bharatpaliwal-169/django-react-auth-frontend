import React,{useState} from 'react'
import {Form,Row,Col,Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../utils/styles/login.css'


export default function HookLogin() {
  const [person,setPerson] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({
      ...person,
      [name] : value
    })
  }

  const onLogin = () => {
    const userData = {
      email : person.email,
      password : person.password
    }
    if(userData.email && userData.password) {
      console.log("Login" + userData.email + " " + userData.password);
    }
    else{
      console.log("Empty");
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={7} className=" offset-sm-2 mt-5 login-card">
            <div className="main-heading text-center mt-4">
              <p>Login</p>
            </div>

            <Form>
              <Form.Group className="mb-4" as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3" className="offset-sm-1" >
                  Email
                </Form.Label>
                <Col sm="7">
                  <Form.Control 
                    type="email"
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                    placeholder="yourEmail@example.com"
                    />
                </Col>
              </Form.Group>

              <Form.Group className="mb-4" as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="3" className="offset-sm-1"> 
                  Password
                </Form.Label>
                <Col sm="7" >
                  <Form.Control
                    type="password"
                    name="password"
                    value={person.password}
                    onChange={handleChange} 
                    placeholder="Password" 
                    />
                </Col>
              </Form.Group>
            </Form>
            <div className='text-center'>
              <Button color="primary" onClick={onLogin}>Login</Button>
              <p className="text-muted mt-2 mb-4">
                Don't have account? <Link to="/signup">Signup</Link>
              </p>
            </div>
            

          </Col>
        </Row>
      </Container>
      
    </React.Fragment>
  )
}
