import React, { useState } from 'react'
import { Alert, Jumbotron, Container, Col, Row, Button } from 'reactstrap'

function App () {
  const [visible, setVisible] = useState(false)
  const [dangerVisible, setDangerVisible] = useState(false)
  const onDismiss = () => setVisible(false)
  const handleButtonClick = () => setVisible(true)
  const handleDangerButtonClick = () => setDangerVisible(true)
  const dismissDangerButton = () => setDangerVisible(false)

  return (
    <div className='App'>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className='display-3'>Fluid jumbotron</h1>
          <p className='lead'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
      <Container style={{ paddingBottom: 20 }}>
        <Row>
          <Col>
            <Button outline color='warning' onClick={handleButtonClick}>
              Click me for an alert
            </Button>
          </Col>
          <Col>
            <Button outline color='danger' onClick={handleDangerButtonClick}>
              Click me for another alert
            </Button>
          </Col>
          <Col>
            <Button outline color='danger' onClick={dismissDangerButton}>
              Click me to get rid of the other alert
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Alert color='primary' isOpen='true'>
          This is a primary alert
        </Alert>
        <Alert color='warning' isOpen={visible} toggle={onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
        <Alert color='danger' isOpen={dangerVisible}>
          I am an alert who's state changes by button clicks!
        </Alert>
      </Container>
    </div>
  )
}

export default App
