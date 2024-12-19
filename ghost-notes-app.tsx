import React, { useState, useEffect } from 'react';
import { Clock, Ghost, Pin, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GhostNotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');
  const [duration, setDuration] = useState('3600'); // Default: 1 hour in seconds

  useEffect(() => {
    // Check for expired notes every minute
    const interval = setInterval(() => {
      setNotes(prevNotes => 
        prevNotes.filter(note => 
          note.isPermanent || Date.now() < note.createdAt + note.duration * 1000
        )
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const addNote = () => {
    if (!newNoteText.trim()) return;

    const newNote = {
      id: Date.now(),
      text: newNoteText,
      createdAt: Date.now(),
      duration: parseInt(duration),
      isPermanent: false
    };

    setNotes(prevNotes => [...prevNotes, newNote]);
    setNewNoteText('');
  };

  const togglePermanent = (id) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, isPermanent: !note.isPermanent } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const getTimeRemaining = (note) => {
    if (note.isPermanent) return 'Permanent';
    const timeLeft = (note.createdAt + note.duration * 1000) - Date.now();
    if (timeLeft <= 0) return 'Expired';
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="flex items-center gap-2 mb-8">
        <Ghost className="w-8 h-8" />
        <h1 className="text-2xl font-bold">GhostNotes</h1>
      </div>

      <div className="flex gap-2">
        <textarea
          className="flex-1 p-2 border rounded-lg resize-none h-24"
          placeholder="Type your note here..."
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
        />
        <div className="flex flex-col gap-2">
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3600">1 hour</SelectItem>
              <SelectItem value="86400">1 day</SelectItem>
              <SelectItem value="604800">1 week</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            className="w-32 gap-2" 
            onClick={addNote}
          >
            <Plus className="w-4 h-4" />
            Add Note
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {notes.map(note => (
          <Card key={note.id} className="relative">
            <CardContent className="p-4">
              <div className="flex justify-between items-start gap-4">
                <p className="flex-1 whitespace-pre-wrap">{note.text}</p>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {getTimeRemaining(note)}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => togglePermanent(note.id)}
                      className={note.isPermanent ? 'text-blue-500' : ''}
                    >
                      <Pin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteNote(note.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GhostNotesApp;