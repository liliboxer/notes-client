import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ title, body, handleTitleChange, handleBodyChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={handleTitleChange}>
        </input>
        <textarea
          type="text"
          value={body}
          placeholder="body"
          onChange={handleBodyChange}>
        </textarea>
        <button>Create Note</button>
      </form>
    </>
  );
}

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleBodyChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default NoteForm;
