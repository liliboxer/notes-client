import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from './NoteForm';

function NotesDisplay({ notes }) {
  const noteElements = notes.map(note => (
    <li key={note.id}>
      <NoteForm
        title={note.title}
        body={note.body}/>
    </li>
  ));

  return (
    <ul>
      {noteElements}
    </ul>
  );

}

NotesDisplay.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default NotesDisplay;
