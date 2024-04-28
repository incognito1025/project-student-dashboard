import React from "react";



function CertificationDetails({ student }) {
  // Determine on-track status
  const isOnTrack =
    student.certifications.resume &&
    student.certifications.linkedin &&
    student.certifications.github &&
    student.certifications.mockInterview &&
    student.codewars.current.total > 600;

  // Display certifications as emojis or icons
  const resumeIcon = student.certifications.resume ? "✅" : "❌";
  const linkedinIcon = student.certifications.linkedin ? "✅" : "❌";
  const githubIcon = student.certifications.github ? "✅" : "❌";
  const mockInterviewIcon = student.certifications.mockInterview ? "✅" : "❌";

  return (
    <div className="grid-container">
      <h4>Certification Details</h4>
      <p>On-track Status: {isOnTrack ? <span>"On Track"</span> : <span>"Off Track"</span>}</p>
      <div className="card">
      <ul>
        <li>Resume: {resumeIcon}</li>
        <li>LinkedIn: {linkedinIcon}</li>
        <li>GitHub: {githubIcon}</li>
        <li>Mock Interview: {mockInterviewIcon}</li>
      </ul>
      </div>
    </div>
  );
}

export default CertificationDetails;



/*
*


   - The student has a resume certification (e.g. `certifications.resume` is `true`).
   - The student has a LinkedIn certification (e.g. `certifications.linkedin` is `true`).
   - The student has a GitHub certification (e.g. `certifications.github` is `true`).
   - The student has a mock interview certification (e.g. `certifications.mockInterview` is `true`).
   - The student has a current CodeWars score that is over 600.


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



