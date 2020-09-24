import React, { useState } from 'react';
import { Alert, Jumbotron, Container, Button } from 'reactstrap'



function App() {

    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);
    const handleButtonClick = () => setVisible(true);

    return (


        <div className="App">
            <Alert color="primary" isOpen="true">
                This is a primary alert
      </Alert>

            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
            <Button type="submit" outline color="primary" onClick={handleButtonClick}>
                Click me for an alert
      </Button>
            <Alert color="warning" isOpen={visible} toggle={onDismiss}>
                I am an alert and I can be dismissed!
    </Alert>


        </div>
    );
}

export default App;
