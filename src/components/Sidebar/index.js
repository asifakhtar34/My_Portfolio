import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinks, SidebarBtn , SidebarBtnLinks} from './SidebarElements'

const Sidebar = ({isopen, toggle}) => {
    return (
        
            <SidebarContainer isopen={isopen} onClick={toggle}>
                <Icon>
                    <CloseIcon onClick={toggle}/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLinks to='/about'>About Me</SidebarLinks>
                        <SidebarLinks to='/myprojects'>My Projects</SidebarLinks>
                        <SidebarLinks to='/Contact'>Contact</SidebarLinks>
                    </SidebarMenu>
                        <SidebarBtn>
                            <SidebarBtnLinks to='../pages/Email'>Email-Me</SidebarBtnLinks>
                        </SidebarBtn>

                </SidebarWrapper>
            </SidebarContainer>
        
    )
}

export default Sidebar


