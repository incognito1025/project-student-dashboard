import React from "react";
import { useState } from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import data from "./data/data.json";



function App() {
  
  return (
    <div className="App">
      <NavBar />
        <div className="grid-container">
      <CohortList data = {data}/>
      <StudentList data = {data} />
    </div>
      </div>
  ); 
}

export default App;


/*

//
Components Map:

App  (Contains everything below)
     Header/Navigation  (Name of App)
     CohortList  (List of cohorts on the left side, better to put it before StudentList so its easier to write CSS)
     StudentList  (List of Students and all their info)
          StudentDetails  (Student info)
               CodewarsDetails  (Details about their codewars info, you missed this part)
               ScoreDetails  (Details about their pursuit grades)
               CertificationDetails  (Details about their overall progress)
          OneOnOneSection  (Section where we can view notes and write new ones)
               OneOnOneForm  (form to write a new note)
               OneOnOneNotesList  (View notes all ready written)



*/