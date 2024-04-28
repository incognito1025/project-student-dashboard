import React from "react";
import { useState } from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
//import NavBar from "./Components/NavBar.css";
//import CohortList from "./Components/CohortList.css";
//import StudentList from "./Components/StudentList.css";
import data from "./data/data.json";



function App() {

  const [dataState, setDataState] = useState(data)

  const [studentArray, setStudentArray] = useState(dataState)

  const [selectedCohort, setSelectedCohort] = useState(null);

  const [heading, setHeading] = useState("All Students");

  // const updateHeading = (event) => {
  //   const text = event.target?.innerText;
  //   if (text) {
  //     setHeading(text);
  //   }
  //   console.log(text)
  // };

  const onCohortClick = (event) => {
    setStudentArray(event.target.innerText === "All Students" ? [...dataState] : dataState.filter(student => student.cohort.cohortCode === event.target.innerText.replace(" 2", "2")))
    setHeading(event.target.innerText)
  }
  
  return (
    <div className="App">
      <NavBar />
        <div>
      <CohortList dataState={dataState} studentArray = {studentArray} onCohortClick={onCohortClick}/>
      <StudentList  heading={heading} selectedCohort={selectedCohort} studentArray={studentArray} />
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