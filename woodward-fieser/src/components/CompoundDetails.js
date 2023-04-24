import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function CompoundDetails({lmax}) {
  const [val, setVal] = useState(0);
  const submitHandler = (e, x)=>{
    e.preventDefault()
    // console.log(x)
    if(Number(x) === Number(lmax)){
      alert('correct values entered');
    }
    else{
      alert('Incorrect λ-max found');
    }
  }
  return (
    <form><p>
        <Container> 
          <Row>
            <Col>Base Value :</Col>
            <Col><input type='text' name='emailId'></input></Col>
        </Row>
        <br/>
          <Row>
            <Col>Ring Residue :</Col>
            <Col><input type='text' name='practicalId'></input></Col>
        </Row><br />
        <Row>
            <Col>Double Bond Conjugation :</Col>
            <Col><input type='text' name='practicalId'></input></Col>
        </Row><br />
        <Row>
            <Col>Exocyclic Double Bonds :</Col>
            <Col><input type='text' name='practicalId'></input></Col>
        </Row><br />
        <Row>
            <Col>Polar groups :</Col>
            <Col><input type='text' name='practicalId'></input></Col>
          </Row><br />
          
        <Row>
            <Col>λmax :</Col>
            <Col><input value={val} onChange={(e) => setVal(e.target.value)}  type='text' name='practicalId'></input></Col>
          </Row><br />
        </Container>
        <br />
      <Button variant="light" className='button-text' size='lg' type="submit" onClick={(e) => submitHandler(e, val)}>
        &nbsp;&nbsp;Submit&nbsp;&nbsp;
      </Button>
    </p></form>
  );
}

export default CompoundDetails;