const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// CUstomize yargs version
yargs.version('1.1.0');

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    },
});

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing a note');
    },
});

//list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Note, note, note');
    },
});

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Lorem ipsum');
    },
});

yargs.parse();
