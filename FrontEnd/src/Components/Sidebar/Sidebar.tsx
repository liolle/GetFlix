
import React from 'react'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'

import { IoLogoVimeo } from "react-icons/io";
import { SidebarData } from './SidebarData'
import { searchBar } from '../Search/search'
import styled from 'styled-components'
import { useState } from 'react'


const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)

    return (
        <>
            <Navbar style={{ zIndex: 100 }} className=" ">
             { searchBar ()}
                <MenuIconOpen to="#" onClick={showSidebar}>
                        
                   
                    <FaIcons.FaUser />
                    
                    <FaIcons.FaBars />
                    
                </MenuIconOpen>
            </Navbar>

            <SidebarMenu style={{ zIndex: 100 }} className=' bg-gradient-to-b from-black to-transparent'close={close}>
                <MenuIconClose  to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                    
                </MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems  key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
           
           
           

        </>
    )
}

export default Sidebar


const Navbar = styled.div`
  display: flex;
  background: black;
  align-items: center;
  height: 3rem;
  z-index: 100;
  justify-content: end;
`
 

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: white;
    position: relative;
    z index: 100;
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: white;
    z index: 100;
   
`

const SidebarMenu = styled.div<{close: boolean}>`
    width: 250px;
    height: 100vh;
    color: white;
    position: fixed;
    top: 0;
    right: ${({ close}) => close ? '0' : '-100%'};
    transition: .6s;
    z index: 100;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
    color: white;
    z index: 100;
    
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: white;

    &:hover {
        
       
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        margin: 0 2rem;
    }
`












