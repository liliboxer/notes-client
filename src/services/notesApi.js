export const createNote = (title, body) => {
  return fetch('http://localhost:7891/api/v1/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
    .then(res => {
      if(!res.ok) throw 'could not save note';
      return res.json();
    });
}
;
