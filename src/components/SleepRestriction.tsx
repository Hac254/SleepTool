import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Moon, Sun } from 'lucide-react';

interface SleepWindow {
  bedtime: string;
  wakeTime: string;
  totalHours: number;
}

const SleepRestriction = () => {
  const [averageSleep, setAverageSleep] = useState('');
  const [sleepEfficiency, setSleepEfficiency] = useState('');
  const [recommendedWindow, setRecommendedWindow] = useState<SleepWindow | null>(null);
  const [desiredWakeTime, setDesiredWakeTime] = useState('07:00');

  const calculateSleepWindow = () => {
    const avgHours = parseFloat(averageSleep);
    const efficiency = parseFloat(sleepEfficiency);
    
    if (isNaN(avgHours) || isNaN(efficiency)) return;

    // Add 30 minutes to recommended time as a buffer
    const recommendedHours = Math.max((avgHours * (efficiency / 100)) - 0.5, 5);
    
    // Calculate bedtime based on desired wake time
    const wake = new Date(`2000-01-01T${desiredWakeTime}`);
    const bed = new Date(wake.getTime() - (recommendedHours * 60 * 60 * 1000));
    
    setRecommendedWindow({
      bedtime: bed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      wakeTime: desiredWakeTime,
      totalHours: recommendedHours
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-orange-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-orange-800">
              Sleep Restriction Therapy Notice
            </h3>
            <div className="mt-2 text-sm text-orange-700">
              <p>
                Sleep restriction therapy should only be undertaken with the guidance of a healthcare professional. 
                This tool is for educational purposes only. Consult your doctor before starting any sleep modification program.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">Sleep Restriction Calculator</h2>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Sleep Time (hours)
            </label>
            <input
              type="number"
              min="0"
              max="24"
              step="0.5"
              value={averageSleep}
              onChange={(e) => setAverageSleep(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="e.g., 6.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sleep Efficiency (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={sleepEfficiency}
              onChange={(e) => setSleepEfficiency(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="e.g., 85"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Desired Wake Time
            </label>
            <input
              type="time"
              value={desiredWakeTime}
              onChange={(e) => setDesiredWakeTime(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        <button
          onClick={calculateSleepWindow}
          className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
        >
          Calculate Sleep Window
        </button>
      </div>

      {recommendedWindow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold mb-4">Recommended Sleep Schedule</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Moon className="text-indigo-600" />
              <div>
                <p className="text-sm text-gray-600">Bedtime</p>
                <p className="text-xl font-semibold">{recommendedWindow.bedtime}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Sun className="text-indigo-600" />
              <div>
                <p className="text-sm text-gray-600">Wake Time</p>
                <p className="text-xl font-semibold">{recommendedWindow.wakeTime}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <Clock className="text-indigo-600" />
              <div>
                <p className="text-sm text-gray-600">Total Sleep Window</p>
                <p className="text-xl font-semibold">
                  {recommendedWindow.totalHours.toFixed(1)} hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">How to Use Sleep Restriction</h3>
        <ul className="space-y-3 text-gray-700">
          <li>1. Start by calculating your current average sleep time from your sleep diary</li>
          <li>2. Input this average along with your estimated sleep efficiency</li>
          <li>3. Choose your desired wake-up time (keep this consistent)</li>
          <li>4. Follow the recommended sleep window strictly for at least a week</li>
          <li>5. If sleep efficiency improves above 90%, add 15 minutes to your time in bed</li>
          <li>6. If efficiency drops below 85%, reduce time in bed by 15 minutes</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SleepRestriction;