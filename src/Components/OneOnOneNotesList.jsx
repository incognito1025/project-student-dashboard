import React, { useState, useEffect } from "react";


function OneOnOneNotesList({ notes }) {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  // Update allNotes when notes prop changes
  useEffect(() => {
    if (notes) {
      setAllNotes(notes);
    }
  }, [notes]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (commenterName && comment) {
      const newNote = { commenterName, comment, timestamp: new Date().toLocaleString() };
      setAllNotes([...allNotes, newNote]);
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
        {allNotes && allNotes.map((note, index) => (
          <li key={index}>
            <strong>{note.commenterName}</strong> ({note.timestamp}): {note.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OneOnOneNotesList;
