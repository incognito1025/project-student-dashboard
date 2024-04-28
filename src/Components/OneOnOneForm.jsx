import React, { useState } from "react";


function OneOnOneForm({ onAddNote }) {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (commenterName && comment) {
      const newNote = {
        commenterName: commenterName,
        comment: comment,
        timestamp: new Date().toLocaleString(),
      };
      // Call the onAddNote function passed as a prop to add the new note
      onAddNote(newNote);
      // Clear the input fields after submitting the form
      setCommenterName("");
      setComment("");
      setErrorMessage(""); // Reset error message
    } else {
      setErrorMessage("Please fill out all fields."); // Display error message
    }
  };

  return (
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
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if present */}
    </form>
  );
}

export default OneOnOneForm;





/*
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
