import React, { useState } from "react";


function ScoreDetails({ student }) {
    const { assignments, projects, assessments } = student.cohort.scores;

    const formattedAssignments = (assignments * 100).toFixed(2) + "%";
    const formattedProjects = (projects * 100).toFixed(2) + "%";
    const formattedAssessments = (assessments * 100).toFixed(2) + "%";

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="score-details">
            <h4>Score Details</h4>
            <ul>
                <li>Assignments: {formattedAssignments}</li>
                <li>Projects: {formattedProjects}</li>
                <li>Assessments: {formattedAssessments}</li>
            </ul>
            <button onClick={toggleDetails}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
                <div>
                    <h4>Additional Details</h4>
                    {/* Add additional details here */}
                    <p>Additional details about the student's scores.</p>
                </div>
            )}
        </div>
    );
}

export default ScoreDetails;


/*

   1. details section includes the percentages for all scores, properly formatted as percentages.
   - The details section includes whether or not the student h**Additional student details.** Include a link or button on each student's profile that hides and shows additional information when clicked. This feature should include the following:
   - The text of the button changes depending on whether it is open or closed.
   - Opening the details section for one student does not open it for every other student.
   - The as received certain certifications. Instead of showing "true" or "false" for certifications, show an emoji or icon depending on the certification status.

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
    1.  Header/Navigation  (Name of App)
    2.  CohortList  (List of cohorts on the left side, better to put it before StudentList so its easier to write CSS)
    3.  StudentList  (List of Students and all their info)
          StudentDetails  (Student info) - child of StudentList
               CodewarsDetails  (Details about their codewars info, you missed this part) - child of StudentDetails
               ScoreDetails  (Details about their pursuit grades) - child of StudentDetails
               CertificationDetails  (Details about their overall progress) -child of StudentDetails
          OneOnOneSection  (Section where we can view notes and write new ones) -child of StudentList
               OneOnOneForm  (form to write a new note)- child of OneOnOneSection
               OneOnOneNotesList  (View notes all ready written) - child of OneOnOneSection


*/ 