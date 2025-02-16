import { motion } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';

const relaxationExercises = [
  {
    id: 1,
    name: "Deep Breathing",
    duration: "5 minutes",
    description: "Breathe in for 4 counts, hold for 4, exhale for 4",
    audioUrl: "https://example.com/deep-breathing.mp3"
  },
  {
    id: 2,
    name: "Progressive Muscle Relaxation",
    duration: "10 minutes",
    description: "Systematically tense and relax different muscle groups",
    audioUrl: "https://example.com/muscle-relaxation.mp3"
  },
  {
    id: 3,
    name: "Guided Sleep Meditation",
    duration: "15 minutes",
    description: "Gentle meditation to help you drift off to sleep",
    audioUrl: "https://example.com/sleep-meditation.mp3"
  }
];

const RelaxationExercise = ({ exercise }: { exercise: typeof relaxationExercises[0] }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{exercise.name}</h3>
          <p className="text-gray-600">{exercise.duration}</p>
          <p className="text-gray-600 mt-2">{exercise.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
            <Volume2 size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Relaxation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Relaxation Tools</h2>
      
      <div className="grid gap-6">
        {relaxationExercises.map(exercise => (
          <RelaxationExercise key={exercise.id} exercise={exercise} />
        ))}
      </div>

      <div className="bg-indigo-50 p-6 rounded-xl mt-8">
        <h3 className="text-lg font-semibold mb-4">Tips for Better Sleep</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Maintain a consistent sleep schedule</li>
          <li>Create a relaxing bedtime routine</li>
          <li>Keep your bedroom cool, dark, and quiet</li>
          <li>Avoid screens before bedtime</li>
          <li>Limit caffeine and alcohol intake</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Relaxation;