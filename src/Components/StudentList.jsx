import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
import OneOnOneSection from "./OneOnOneSection";

export default function StudentList({ heading, studentArray, onCohortClick, selectedCohort }) {
  const [showMoreMap, setShowMoreMap] = useState({});

  const toggleShowMore = (studentId) => {
    setShowMoreMap(prevState => ({
      ...prevState,
      [studentId]: !prevState[studentId]
    }));
  };

  const isOnTrack = (student) => {
    const { certifications, codewars } = student;
    return (
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview &&
      codewars.current.total > 600
    );
  };

  return (
    <div className="student-list">
      <h1>All Students</h1>
      <h2>{heading}</h2>
      <p>Total Students: {studentArray.length}</p>
      {selectedCohort && <p>Selected Cohort: {selectedCohort}</p>}
      {studentArray.map((student) => (
        <div key={student.id} className={`card ${isOnTrack(student) ? "on-track" : "off-track"}`}>
          <div className="card">
            <img src={student.profilePhoto} alt="Profile" />
          </div>
          <div>
            <h2>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h2>
            <p>Username: {student.username}</p>
            <p>Birthday: {new Date(student.dob).toLocaleString('default', { month: 'long', day: "numeric", year:"numeric"})}</p>
            {showMoreMap[student.id] && (
              <>
                <StudentDetails student={student} />
                <OneOnOneSection />
              </>
            )}
            <button className="show-more-button" onClick={() => toggleShowMore(student.id)}>
              {showMoreMap[student.id] ? "Show less..." : "Show more..."}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
