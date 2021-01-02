import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class MenuPage extends Component { 

    render() {
        return(
            <div>
                <Image src="chicken.jpg" rounded></Image>
                <ul>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                    <li>Menu Item</li>
                </ul>
            </div>
        )
    }

}

export default MenuPage;