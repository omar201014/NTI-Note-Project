
const yargs = require('yargs');  // define the yargs module // 
const notes = require('./data.js');  // require the data.js file //
// add a new note command //
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        // import the notes module and add a new note //
        notes.addNote(yargs.argv.title, yargs.argv.body);
    }
})
// remove a note command //
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => {
        // import the notes module and remove a note //
        notes.removeNote(yargs.argv.title);
    }
})
// read a note command //
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            type : 'string' , 
            demandOption: true
        }
    },
    handler: () => {
        // import the notes module and read a note //
        notes.readNote(yargs.argv.title);
    }
})
// list all notes command //
yargs.command({
    command: 'list',
    describe: 'List all notes titles',
    handler: () => {
        // import the notes module and list all nodes titles //
        notes.listNotes();
    }
})


yargs.parse();
