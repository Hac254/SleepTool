import { motion } from 'framer-motion';
import { BookOpen, Youtube, Podcast } from 'lucide-react';

const resources = {
  books: [
    {
      title: "Why We Sleep",
      author: "Matthew Walker",
      description: "Unlocking the power of sleep and dreams",
      link: "https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144324"
    },
    {
      title: "The Sleep Solution",
      author: "W. Chris Winter",
      description: "Why your sleep is broken and how to fix it",
      link: "https://www.amazon.com/Sleep-Solution-Why-Broken-Fix/dp/0399583614"
    }
  ],
  videos: [
    {
      title: "How to get better sleep",
      channel: "TED",
      duration: "11:49",
      link: "https://www.youtube.com/watch?v=5MuIMqhT8DM"
    },
    {
      title: "The Science of Sleep",
      channel: "SciShow",
      duration: "10:04",
      link: "https://www.youtube.com/watch?v=3mHv77jX8p8"
    }
  ],
  podcasts: [
    {
      title: "Sleep With Me",
      host: "Drew Ackerman",
      description: "Bedtime stories to help you fall asleep",
      link: "https://www.sleepwithmepodcast.com"
    },
    {
      title: "Sleep Talk",
      host: "Dr. David Cunnington",
      description: "Expert discussions about sleep",
      link: "https://www.sleephub.com.au/podcast"
    }
  ]
};

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-800">Educational Resources</h2>

      {/* Books Section */}
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="text-indigo-600" />
          <h3 className="text-xl font-semibold">Recommended Books</h3>
        </div>
        <div className="grid gap-4">
          {resources.books.map((book, index) => (
            <motion.a
              key={index}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-indigo-600">{book.title}</h4>
              <p className="text-gray-600">by {book.author}</p>
              <p className="text-gray-500 text-sm mt-1">{book.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Youtube className="text-indigo-600" />
          <h3 className="text-xl font-semibold">Educational Videos</h3>
        </div>
        <div className="grid gap-4">
          {resources.videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-indigo-600">{video.title}</h4>
              <p className="text-gray-600">{video.channel}</p>
              <p className="text-gray-500 text-sm mt-1">Duration: {video.duration}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Podcasts Section */}
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Podcast className="text-indigo-600" />
          <h3 className="text-xl font-semibold">Sleep Podcasts</h3>
        </div>
        <div className="grid gap-4">
          {resources.podcasts.map((podcast, index) => (
            <motion.a
              key={index}
              href={podcast.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-indigo-600">{podcast.title}</h4>
              <p className="text-gray-600">Hosted by {podcast.host}</p>
              <p className="text-gray-500 text-sm mt-1">{podcast.description}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Education;