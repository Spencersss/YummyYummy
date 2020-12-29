import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class MenuPage extends Component { 

    render() {
        return(
            <div>
                <Image src="https://content.web-repository.com/s/8921418051135322/thumbnails/640x480/Images/chicken-7603141.jpg" rounded></Image>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </div>
        )
    }

}

export default MenuPage;