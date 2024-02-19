// /*!

// =========================================================
// * BLK Design System React - v1.2.2
// =========================================================

// * Product Page: https://www.creative-tim.com/product/blk-design-system-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// import { Link } from "react-router-dom";
// // reactstrap components
// import {
//   Button,
//   Collapse,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip,
// } from "reactstrap";

// export default function ExamplesNavbar() {
//   const [collapseOpen, setCollapseOpen] = React.useState(false);
//   const [collapseOut, setCollapseOut] = React.useState("");
//   const [color, setColor] = React.useState("navbar-transparent");
//   React.useEffect(() => {
//     window.addEventListener("scroll", changeColor);
//     return function cleanup() {
//       window.removeEventListener("scroll", changeColor);
//     };
//   }, []);
//   const changeColor = () => {
//     if (
//       document.documentElement.scrollTop > 99 ||
//       document.body.scrollTop > 99
//     ) {
//       setColor("bg-info");
//     } else if (
//       document.documentElement.scrollTop < 100 ||
//       document.body.scrollTop < 100
//     ) {
//       setColor("navbar-transparent");
//     }
//   };
//   const toggleCollapse = () => {
//     document.documentElement.classList.toggle("nav-open");
//     setCollapseOpen(!collapseOpen);
//   };
//   const onCollapseExiting = () => {
//     setCollapseOut("collapsing-out");
//   };
//   const onCollapseExited = () => {
//     setCollapseOut("");
//   };
//   return (
//     <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
//       <Container>
//         <div className="navbar-translate">
//           <NavbarBrand to="/" id="navbar-brand" tag={Link}>
//             <span>BLK• </span>
//             Design System React
//           </NavbarBrand>
//           <UncontrolledTooltip placement="bottom" target="navbar-brand">
//             Designed and Coded by Creative Tim
//           </UncontrolledTooltip>
//           <button
//             aria-expanded={collapseOpen}
//             className="navbar-toggler navbar-toggler"
//             onClick={toggleCollapse}
//           >
//             <span className="navbar-toggler-bar bar1" />
//             <span className="navbar-toggler-bar bar2" />
//             <span className="navbar-toggler-bar bar3" />
//           </button>
//         </div>
//         <Collapse
//           className={"justify-content-end " + collapseOut}
//           navbar
//           isOpen={collapseOpen}
//           onExiting={onCollapseExiting}
//           onExited={onCollapseExited}
//         >
//           <div className="navbar-collapse-header">
//             <Row>
//               <Col className="collapse-brand" xs="6">
//                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                   BLK•React
//                 </a>
//               </Col>
//               <Col className="collapse-close text-right" xs="6">
//                 <button
//                   aria-expanded={collapseOpen}
//                   className="navbar-toggler"
//                   onClick={toggleCollapse}
//                 >
//                   <i className="tim-icons icon-simple-remove" />
//                 </button>
//               </Col>
//             </Row>
//           </div>
//           <Nav navbar>
//             <NavItem className="p-0">
//               <NavLink
//                 data-placement="bottom"
//                 href="https://twitter.com/CreativeTim"
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 title="Follow us on Twitter"
//               >
//                 <i className="fab fa-twitter" />
//                 <p className="d-lg-none d-xl-none">Twitter</p>
//               </NavLink>
//             </NavItem>
//             <NavItem className="p-0">
//               <NavLink
//                 data-placement="bottom"
//                 href="https://www.facebook.com/CreativeTim"
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 title="Like us on Facebook"
//               >
//                 <i className="fab fa-facebook-square" />
//                 <p className="d-lg-none d-xl-none">Facebook</p>
//               </NavLink>
//             </NavItem>
//             <NavItem className="p-0">
//               <NavLink
//                 data-placement="bottom"
//                 href="https://www.instagram.com/CreativeTimOfficial"
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 title="Follow us on Instagram"
//               >
//                 <i className="fab fa-instagram" />
//                 <p className="d-lg-none d-xl-none">Instagram</p>
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <Button
//                 className="nav-link d-none d-lg-block"
//                 color="primary"
//                 target="_blank"
//                 href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-examples-navbar-upgrade-pro"
//               >
//                 <i className="tim-icons icon-spaceship" /> Upgrade to PRO
//               </Button>
//             </NavItem>
//             <NavItem>
//               <NavLink tag={Link} to="/">
//                 Back to Kit
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
//                 Have an issue?
//               </NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Container>
//     </Navbar>
//   );
// }





import React from 'react'
import { Link } from 'react-router-dom'


import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const ExamplesNavbar = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/home" className="header-navlink Large">
          <img
            alt="..."
            className="recag"
            src={require("assets/img/recaglogo.png")}
          />
          </Link>
          <div className="header-menu">
            <Link to="/home" className="header-navlink1 Large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink2 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink3 Large">
              Coming Soon
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryPinkButton button="Login/Sign-up"></PrimaryPinkButton>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/home" className="header-navlink4 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/home" className="header-navlink5 Large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink6 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink7 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

export default ExamplesNavbar
