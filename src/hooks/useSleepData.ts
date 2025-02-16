import { useState, useEffect } from 'react';
import { SleepEntry } from '../types';

export const useSleepData = () => {
  const [entries, setEntries] = useState<SleepEntry[]>(() => {
    const saved = localStorage.getItem('sleepEntries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('sleepEntries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry: Omit<SleepEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
    };
    setEntries(prev => [...prev, newEntry]);
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const getAverageHours = () => {
    if (entries.length === 0) return 0;
    return entries.reduce((acc, curr) => acc + curr.hoursSlept, 0) / entries.length;
  };

  const getAverageQuality = () => {
    if (entries.length === 0) return 0;
    return entries.reduce((acc, curr) => acc + curr.sleepQuality, 0) / entries.length;
  };

  return {
    entries,
    addEntry,
    deleteEntry,
    getAverageHours,
    getAverageQuality,
  };
};