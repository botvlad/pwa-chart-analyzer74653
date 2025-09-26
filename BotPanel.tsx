"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Signal = "Играть" | "Пропустить";

export default function BotPanel() {
  const [currentSignal, setCurrentSignal] = useState<Signal | null>(null);

  const generateSignal = () => {
    const signal: Signal = Math.random() > 0.5 ? "Играть" : "Пропустить";
    setCurrentSignal(signal);
  };

  return (
    <div className="bg-[#1a1a24] p-6 rounded-2xl shadow-xl max-w-md mx-auto text-center">
      <button
        onClick={generateSignal}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold text-lg mb-6"
      >
        Выдать сигнал
      </button>
      <AnimatePresence>
        {currentSignal && (
          <motion.div
            key={currentSignal}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`p-6 text-2xl font-bold rounded-xl ${
              currentSignal === "Играть" ? "bg-green-700" : "bg-red-700"
            }`}
          >
            {currentSignal}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}