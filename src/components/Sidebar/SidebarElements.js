import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const SidebarContainer = styled.aside`
display:flex;
align-items: center;
justify-content: center;
 position: absolute;
 /* top: 0; */
 right: 0px;
 background: #1b1a1a;
 height: 100vh;
 width: 100vw;
 z-index: 999;
 transition: all 0.2s ease-in-out;
 opacity: ${({isopen}) => isopen ? '100%':'0%'};
 top: ${({isopen}) => isopen ? '0px':'-100vh'};

`
export const Icon = styled.div`
display:flex;
align-items: center;

`
export const CloseIcon = styled(FaTimes)`
color: #fff;
position: absolute;
top: 1rem;
right: 1rem;
font-size: 26px;
cursor: pointer;

`
export const SidebarWrapper = styled.div`
/* display:grid;
place-items: center; */
`

export const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(5, 40px);
 grid-row-gap: 50px;

` 
export const SidebarLinks = styled.li`
display:grid;
place-items: center;
color: #fff;
text-decoration: none;
font-size: 22px;
list-style-type: none;
cursor: pointer;
`


export const SidebarBtn = styled.div`
display:flex;
align-items: center;


`
export const SidebarBtnLinks = styled(LinkR)`

padding: 10px 22px;
color:#010606;
text-decoration: none;
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
cursor: pointer;
font-size: 16px;
transition: all 0.2s ease-in-out;


&:hover{
  /* color: #01bf71; */
  background: #fff;
  transition: all 0.2s ease-in-out;
}

`
