import React from "react";
import {FaBars} from 'react-icons/fa'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu , NavItem, NavLinks, NavBtnLink, NavBtn} from "./NavbarComponents";

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">ASIF</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars  />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">My Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Contact</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/">Email-Me</NavBtnLink>
                        </NavBtn>
                        
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navbar;

