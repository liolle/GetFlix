import React from 'react'



const Navbar = styled.div`
display: flex;
background: black;
align-items: center;
height: 3rem;
z-index: 100;
`

const Logo = styled.div`
margin-right: auto
`;

const NavIcons = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-left: auto;
`

const NavbarComponent = () => {
return (
  <Navbar className="">
    <Logo>
      <IoLogoVimeo />
    </Logo>
    <NavIcons>
      <div><FaIcons.FaUser /></div>
      <div><FaIcons.FaBars /></div>
    </NavIcons>
  </Navbar>
)
}

export default NavbarComponent








