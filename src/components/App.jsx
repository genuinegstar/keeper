import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const notes = [{ title: "", content: "" }];

  const [newNote, setNewNote] = useState({
    notes: []
  });

  function handleNewNote(note) {
    setNewNote((prev) => ({ ...prev, notes: [...prev.notes, note] }));
  }
  function handleDelete(key) {
    setNewNote((prev) => ({
      ...prev,
      notes: prev.notes.filter((note, index) => index !== key)
    }));
  }
  return (
    <div>
      <Header />
      <CreateArea addNewNote={handleNewNote} />
      {newNote.notes.map((note, index) => (
        <Note
          onDelete={handleDelete}
          customkey={index}
          title={note.title}
          content={note.content}
        />
      ))}{" "}
      <Footer />
    </div>
  );
}

export default App;
