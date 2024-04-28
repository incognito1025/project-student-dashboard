import { useState } from "react";


export default function CohortList({ dataState, studentArray, onCohortClick }) {
  const [heading, setHeading] = useState("All Students");

  const updateHeading = (event) => {
    const text = event.target?.innerText;
    if (text) {
      setHeading(text);
    }
    console.log(text)
  };

  

  // Extracting unique cohort names and sorting them
  const uniqueCohortNames = [...new Set(dataState.map(({ cohort }) => cohort.cohortCode))];
  const sortedUniqueCohortNames = uniqueCohortNames.sort((a, b) => {
    // Extracting the year from the cohort code and converting it to a number
    const yearA = parseInt(a.match(/\d+/)[0]);
    const yearB = parseInt(b.match(/\d+/)[0]);
    // Sorting in descending order based on the year
    return yearB - yearA;
  });

  return (
    <main>
      <div className="cohort-students">
      <div className="cohort-list"> {/* Use a div instead of <sidebar> */}
      <h3>Choose a Cohort by Start Date</h3>
        {sortedUniqueCohortNames.map((cohortName) => (
          <h4 key={cohortName} onClick={onCohortClick}>
            {cohortName.replace("2", " 2")}
          </h4>
        ))}
      </div>
      </div>
    </main>
  );
}







//bundle of data
/*
"cohort": {
      "cohortCode": "Fall2026",


      make a list item via html element
      generate a list item 
      have text inside it
      every iteration ends at line 19
      */

      /*


{
    "id": "2Nxf4T1",
    "names": {
      "preferredName": "Ramona",
      "middleName": "Lyric",
      "surname": "Kling"
    },
    "username": "ramona.kling@pursuit.org",
    "dob": "5/2/1983",
    "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=female&minimum_age=34&maximum_age=44",
    "codewars": {
      "current": { "total": 1838, "lastWeek": 27 },
      "goal": { "total": 850, "lastWeek": 75 }
    },
    "certifications": {
      "resume": false,
      "linkedin": false,
      "github": false,
      "mockInterview": false
    },
    "notes": [],
    "cohort": {
      "cohortCode": "Winter2026",
      "cohortStartDate": "12/1/26",
      "scores": { "assignments": 0.72, "projects": 0.64, "assessments": 0.76 }
    }
  },


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