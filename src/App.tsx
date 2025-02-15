import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { SalaryCalculator } from './components/SalaryCalculator';

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar onCalculatorClick={() => setShowCalculator(true)} />
      {showCalculator ? (
        <SalaryCalculator onClose={() => setShowCalculator(false)} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;