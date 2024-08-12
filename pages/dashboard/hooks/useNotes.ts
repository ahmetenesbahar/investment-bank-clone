import { useState, useCallback } from "react";

interface Note {
  title: string;
  description: string;
  displayDate: string;
  recurrence: string;
  lastViewedDate: string;
}

const useNotes = () => {
  const getNotes = () => {
    if (typeof window !== "undefined") {
      const notes = localStorage.getItem("notes");
      return notes ? JSON.parse(notes) : [];
    }
    return [];
  };

  const addNote = useCallback((newNote: Note) => {
    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    existingNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(existingNotes));
  }, []);

  const removeNote = useCallback((title: string) => {
    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    const updatedNotes = existingNotes.filter(
      (note: Note) => note.title !== title
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, []);

  const notes = getNotes();

  return {
    notes,
    addNote,
    removeNote,
    getNotes,
  };
};

export default useNotes;
