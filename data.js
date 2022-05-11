// logic  add/remove/list/read //
const fs = require('fs');  // require the filesystem module //
// add a new note //
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) =>{
        return note.title === title;
    });
    // if the note is not found //
    if(!duplicateNote){
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log('Note added successfully');
    } 
    // else if the note is found //
    else {
        console.log('Note title taken');
    }
}

// remove a note //
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;   // return notes array without the title //     
    });
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log('Note removed successfully');
    } else {
        console.log('Note not found');
    }
}
// read a note //
const readNote = (title) => {
    const notes = loadNotes();
    const readMyNote = notes.find((note) => {
        return note.title === title;
    });    
    if(readMyNote){
        console.log(`Title: ${readMyNote.title}`);
        
    } else {
        console.log('Note not found');
    }
}
// list all notes //
const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note ,ind ,arr) => {
        console.log(`Title: ${note.title}`); 
        console.table(arr);
    });    
}

const loadNotes = () => {
    try {       // try to read the file //
        const data = fs.readFileSync('data.json');
        return JSON.parse(data);
    } catch (e) { // if the file is not found //
        return [];
    }
}
// save the notes into a JSON form //
const saveNotes = (notes) => {
    fs.writeFileSync('data.json' ,JSON.stringify(notes));
}

// export the addNote function to the handler //
module.exports = {
    addNote ,
    removeNote ,
    readNote ,
    listNotes
}


