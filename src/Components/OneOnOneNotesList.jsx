import React, { useState } from "react";

function OneOnOneNotesList({ notes }) {
    const [commenterName, setCommenterName ] = useState("");
    const [comment, setComment] = useState("");
    const [allNotes, setAllNotes] = useState(notes);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (commenterName && comment) {
      const newNote = { commenterName, comment, timestamp: new Date().toLocaleString() };
      setAllNotes([...allNotes, newNotes]);
      setCommenterName("");
      setComment("");
    }
  };

  return (
    <div>
      <h3>1-on-1 Notes</h3>
      <form onSubmit={handleFormSubmit}>
        <label>
          Commenter Name:
          <input 
            type="text" 
            value={commenterName} 
            onChange={(event) => setCommenterName(event.target.value)} 
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {allNotes.map((notes, index) => (
          <li key={index}>
            <strong>{notes.commenterName}</strong> ({notes.timestamp}): {notes.comment}
          </li>
        ))}
      </ul>
    </div>
  );
  }


export default OneOnOneNotesList;


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