export interface SleepEntry {
  id: string;
  date: string;
  hoursSlept: number;
  sleepQuality: 1 | 2 | 3 | 4 | 5;
  mood: 'great' | 'good' | 'okay' | 'bad' | 'terrible';
  notes: string;
}

export interface EnvironmentAssessment {
  temperature: number;
  noise: number;
  light: number;
  comfort: number;
}