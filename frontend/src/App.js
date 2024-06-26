import React from "react";
import Chat from "./components/chat";
import { Landing } from "./components/Landing";
import { Explore } from "./components/Explore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stack, Text, Button } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProjectPage } from "./components/ProjectPage";
import { InteractiveMap } from "./components/InteractiveMap";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Stack 
        justifyContent="center" 
        alignItems="center" 
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/map" element={<InteractiveMap />} />
        </Routes>
        <Navbar />
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;
