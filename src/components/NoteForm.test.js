import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from '../components/NoteForm';

describe('NoteForm component', () => {
  it('renders NoteForm', () => {
    const wrapper = shallow(<NoteForm 
      title="My Note"
      body="My awesome note"
      handleTitleChange={() => {}}
      handleBodyChange={() => {}}
      handleSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
