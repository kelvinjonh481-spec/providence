'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sampleVotes = [
  { country: 'United States', name: 'Stanley Gray', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { country: 'Canada', name: 'Emily Wilson', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { country: 'Nigeria', name: 'Chinedu Okoro', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' },
  { country: 'Germany', name: 'Anna Müller', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { country: 'Brazil', name: 'Carlos Souza', avatar: 'https://randomuser.me/api/portraits/men/14.jpg' },
];

let nextId = 0;

export default function VotingFeed() {
  const [alerts, setAlerts] = useState<{ id: number; country: string; name: string; avatar: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = sampleVotes[Math.floor(Math.random() * sampleVotes.length)];
      const id = nextId++;
      setAlerts((prev) => [...prev, { ...next, id }]);

      // Auto-remove alert after 5 seconds
      setTimeout(() => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
      }, 5000);
    }, 3000); // every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-0 px-5 w-fit flex flex-col gap-2 z-50">
      <AnimatePresence>
        {alerts.map(({ id, name, country, avatar }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-blue-100 border border-blue-300 p-3 rounded shadow"
          >
            <img src={avatar} alt={name} className="w-8 h-8 rounded-full" />
            <p className="text-sm text-gray-700">
              Someone from <strong>{country}</strong> named <strong>{name}</strong> just voted.
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
