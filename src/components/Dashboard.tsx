import { motion } from 'framer-motion';
import { useSleepData } from '../hooks/useSleepData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Moon, ThumbsUp } from 'lucide-react';

const Dashboard = () => {
  const { entries, getAverageHours, getAverageQuality } = useSleepData();

  const last7Days = entries.slice(-7).map(entry => ({
    date: new Date(entry.date).toLocaleDateString(undefined, { weekday: 'short' }),
    hours: entry.hoursSlept,
    quality: entry.sleepQuality
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-xl md:text-2xl font-bold text-gray-800">Sleep Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <Clock className="text-indigo-600" />
            <h3 className="text-sm md:text-base text-gray-600">Average Sleep</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold mt-2">{getAverageHours().toFixed(1)}h</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <Moon className="text-indigo-600" />
            <h3 className="text-sm md:text-base text-gray-600">Sleep Entries</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold mt-2">{entries.length}</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <ThumbsUp className="text-indigo-600" />
            <h3 className="text-sm md:text-base text-gray-600">Average Quality</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold mt-2">{getAverageQuality().toFixed(1)}/5</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-base md:text-lg font-semibold mb-4">Last 7 Days Sleep Pattern</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={last7Days} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="hours" 
                stroke="#4F46E5" 
                strokeWidth={2}
                dot={{ fill: '#4F46E5' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;