import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Menu>
            <Menu.Item as={Link} to="/">
                Shopping
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item as={Link} to="/">
                    Shop
                </Menu.Item>
                <Menu.Item as={Link} to="/cart">
                    My Cart
                </Menu.Item>
                <Menu.Item as={Link} to="/cart">
                    <Icon name="shopping cart" />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Navbar;