import { useCallback } from "react";

interface Note {
  id?: string;
  title: string;
  description: string;
  displayDate: string;
  recurrence: string;
  lastViewedDate: string;
}

const useNotes = () => {
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const getNotes = () => {
    if (typeof window !== "undefined") {
      const notes = localStorage.getItem("notes");
      return notes ? JSON.parse(notes) : [];
    }
    return [];
  };

  const addNote = useCallback((newNote: Omit<Note, "id">) => {
    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");

    const noteWithId: Note = { ...newNote, id: generateId() };

    existingNotes.push(noteWithId);
    localStorage.setItem("notes", JSON.stringify(existingNotes));
  }, []);

  const removeNote = useCallback((id: string) => {
    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    const updatedNotes = existingNotes.filter((note: Note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, []);

  const editNote = useCallback((updatedNote: Note) => {
    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    console.log("Existing Notes:", existingNotes);

    const updatedNotes = existingNotes.map((note: Note) =>
      note.id === updatedNote.id ? { ...note, ...updatedNote } : note
    );
    console.log("Updated Notes:", updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, []);

  const notes = getNotes();

  return {
    notes,
    addNote,
    removeNote,
    editNote,
    getNotes,
  };
};

export default useNotes;
