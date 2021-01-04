import React, { Component } from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';

const sectionImages = [
    {name: "Appetizers", src: "apps.jpg"},
    {name: "Chicken", src: "chicken.jpg"},
    {name: "Fried Rice", src: "fried_rice.jpg"},
]

class HomePage extends Component {

    render() {
        return(
            <div>
                <Container id="pageContainer">
                    <Row>
                        <Col md={6} sm={12} xs={12} xl={6}>
                            <Image fluid src="guest.jpg" />
                        </Col>
                        <Col md={6} sm={12} xs={12} xl={6}> 
                            <h1>
                                Welcome to our family owned and operated Chinese 
                                takeout Restaurant located in Schenectady, NY.
                            </h1>
                            <p>
                                Yummy Yummy offers authentic and delicious Chinese take for lunch and dinner.
                                Celebrating its 30th year in business, it’s no wonder that Yummy Yummy has been a premier Chinese food destination and local favorite.
                                The food is prepared daily using fresh ingredients and Chinese cooking style passed down through generations.
                            </p>
                        </Col>
                    </Row>  
                    <Row>
                        {sectionImages.map(section => 
                            <Col sm={12} xs={12} lg={4}>
                                <Image id="sectionImage" fluid src={section.src} />
                                <h3 id="sectionLabel">
                                    {section.name}
                                </h3>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }

}

export default HomePage;