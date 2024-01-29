import React from "react";
/*import { useState } from "react";*/
import "./App.css";
//import Header from './header';
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import ProjectPgNavi from "./ProjectPgNavi";
import SearchBar from "./SearchBar";
import SidePanel from "./SidePanel";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <SearchBar />
      <SidePanel />
      <ProjectCard />
      <ProjectPgNavi />
      <ProjectForm />
    </div>
  );
}

export default App;
