import React, { Component } from 'react';
import NotesDisplay from './NotesDisplay';
import NoteForm from './NoteForm';
import { createNote } from '../services/notesApi';

export default class NotesContainer extends Component {
  state = {
    notes: [],
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    createNote(title, body)
      .then(note => console.log(note));
    // this.setState(state => ({ notes: state.notes }));
  }

  handleTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  }

  handleBodyChange = ({ target }) => {
    this.setState({ body: target.value });
  }

  render() {
    return (
      <>
        <NoteForm
          title={this.state.title}
          body={this.state.body}
          handleTitleChange={this.handleTitleChange}
          handleBodyChange={this.handleBodyChange}
          handleSubmit={this.handleSubmit}
        />
        <NotesDisplay notes={this.state.notes}/>
      </>
    );
  }
}
