import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../components/navbar/Navbar";
import "../css/Home.css";

function Home() {
  return(
      <Container fluid className="p-0 m-0 home text-light">
          <NavbarComponent />
          Home
      </Container>
  )
}

export default Home;
