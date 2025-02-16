import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSleepData } from '../hooks/useSleepData';
import { Trash2 } from 'lucide-react';

const SleepDiary = () => {
  const { entries, addEntry, deleteEntry } = useSleepData();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    hoursSlept: '',
    sleepQuality: '',
    mood: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEntry({
      date: formData.date,
      hoursSlept: Number(formData.hoursSlept),
      sleepQuality: Number(formData.sleepQuality) as 1 | 2 | 3 | 4 | 5,
      mood: formData.mood as 'great' | 'good' | 'okay' | 'bad' | 'terrible',
      notes: formData.notes,
    });
    setFormData({ date: '', hoursSlept: '', sleepQuality: '', mood: '', notes: '' });
    setShowForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Sleep Diary</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {showForm ? 'Cancel' : 'Add Entry'}
        </button>
      </div>

      {showForm && (
        <motion.form
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hours Slept</label>
              <input
                type="number"
                required
                min="0"
                max="24"
                step="0.5"
                value={formData.hoursSlept}
                onChange={(e) => setFormData({ ...formData, hoursSlept: e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sleep Quality (1-5)</label>
              <select
                required
                value={formData.sleepQuality}
                onChange={(e) => setFormData({ ...formData, sleepQuality: e.target.value })}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select quality</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mood</label>
              <select
                required
                value={formData.mood}
                onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select mood</option>
                <option value="great">Great</option>
                <option value="good">Good</option>
                <option value="okay">Okay</option>
                <option value="bad">Bad</option>
                <option value="terrible">Terrible</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full p-2 border rounded-lg"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Save Entry
          </button>
        </motion.form>
      )}

      <div className="space-y-4">
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{new Date(entry.date).toLocaleDateString()}</h3>
                <p className="text-gray-600">Hours slept: {entry.hoursSlept}</p>
                <p className="text-gray-600">Quality: {entry.sleepQuality}/5</p>
                <p className="text-gray-600">Mood: {entry.mood}</p>
                {entry.notes && <p className="text-gray-600 mt-2">{entry.notes}</p>}
              </div>
              <button
                onClick={() => deleteEntry(entry.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SleepDiary;