// OneOnOneSection.jsx

import OneOnOneForm from "./OneOnOneForm";
import OneOnOneNotesList from "./OneOnOneNotesList";

function OneOnOneSection({ onAddNote, notes }) {
    return (
        <div className="OneOnOneSectionContainer"> {/* Apply container div class */}
            <div className="OneOnOneFormContainer"> {/* Apply OneOnOneForm container class */}
                <OneOnOneForm onAddNote={onAddNote} />
            </div>
            <div className="OneOnOneNotesListContainer"> {/* Apply OneOnOneNotesList container class */}
                <OneOnOneNotesList notes={notes} />
            </div>
        </div>
    );
}

export default OneOnOneSection;
