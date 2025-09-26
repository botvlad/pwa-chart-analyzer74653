"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Signal = { id: number; value: string; active: boolean };

export default function AviatorBotPanel() {
  const [currentSignal, setCurrentSignal] = useState<Signal | null>(null);

  const generateSignal = () => {
    if (Math.random() < 0.2) {
      setCurrentSignal({ id: Date.now(), value: "Пропустить", active: false });
    } else {
      const coef = (Math.random() * (5 - 1.2) + 1.2).toFixed(2);
      setCurrentSignal({ id: Date.now(), value: `${coef}x`, active: true });
    }
  };

  return (
    <div className="bg-[#1a1a24] p-6 rounded-2xl shadow-xl max-w-md mx-auto text-center">
      <button
        onClick={generateSignal}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold text-lg mb-6"
      >
        Выдать сигнал ✈️
      </button>
      <h2 className="text-xl font-bold mb-3">Текущий сигнал:</h2>
      <AnimatePresence>
        {currentSignal && (
          <motion.div
            key={currentSignal.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`p-6 text-2xl font-bold rounded-xl ${
              currentSignal.active ? "bg-green-700" : "bg-red-700"
            }`}
          >
            {currentSignal.active ? `✈️ Лететь до ${currentSignal.value}` : "⛔ Пропустить"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}