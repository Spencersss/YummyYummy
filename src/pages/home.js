import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class HomePage extends Component {

    render() {
        return(
            <div>
                <Container id="pageContainer">
                    <Row>
                        <h1>
                            Welcome to our family owned and operated Chinese 
                            takeout Restaurant located in Schenectady, NY.
                        </h1>
                        <p>
                            Yummy Yummy offers authentic and delicious Chinese take for lunch and dinner.
                            Celebrating its 30th year in business, it’s no wonder that Yummy Yummy has been a premier Chinese food destination and local favorite.
                            The food is prepared daily using fresh ingredients and Chinese cooking style passed down through generations.
                        </p>
                    </Row>  
                </Container>
            </div>
        )
    }

}

export default HomePage;