import React from "react";

function CodewarsDetails({ student }) {
    const currentTotal = student.codewars.current.total;

    function handleCheckboxChange() {
        // Handle checkbox change logic here
    }

    return (
        <div>
            <h3>Codewar Score</h3>
            {currentTotal > 600 ? (
                <div>
                    <label>
                        <input type="checkbox" onChange={handleCheckboxChange} />
                        Codewars Score over 600
                    </label>
                </div>
            ) : (
                <p>No Codewars Score over 600</p>
            )}
        </div>
    );
}

export default CodewarsDetails;

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