// DEPENDENCIES
const fs = require('fs');
const chalk = require('chalk');

// ADD A NOTE
const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });

        console.log('Note added successfully!');
    } else {
        console.log('Title already taken!');
    }

    saveNotes(notes);
};

// REMOVE NOTE
const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('No notes found!'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    }
};

// LIST NOTES
const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.green.inverse('Your Notes:'));
    notes.forEach((note) => console.log(note.title));
};

// READ NOTES
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
};

// UTILITIES
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

// EXPORT
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};
