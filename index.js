import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import express from 'express';

const defaultData = { notes: [] };
const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);

let app = express();

app.use(express.json());
app.use(express.static('public'));

let port = 3000;
app.listen(port, () => {
  console.log('Server listening on localhost:', port);
});

/*ROUTES */
app.get('/notes', (request, response) => {
  db.read()
  .then(() => {
    let theData = {notes : db.data.notes};
    response.json(theData);
  });

});

app.post('/new-note', (request, response) => {

  db.data.notes.push(newNote)
  db.write()
      .then(() => {
      });

      /*
let newMessage = request.body;
newMessage.time = Date();

defaultData.push(newMessage);
response.json({'msg': 'Success'});
*/
});



