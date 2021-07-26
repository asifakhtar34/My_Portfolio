import React from "react";
import {FaBars} from 'react-icons/fa'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu , NavItem, NavLinks} from "./NavbarComponents";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">ASIF</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">My Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navbar;

