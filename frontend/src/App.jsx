import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import React from "react";
import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { AdoptionSection } from "./components/AdoptionSection";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


function App() {
  return (
    <Router>
      <Header />
      <AboutSection />
      <AdoptionSection />
      <Container sx={{ mt: 4 }}>
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo!
        </Typography> */}
      </Container>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;  