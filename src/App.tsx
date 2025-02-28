import React, { useState, useMemo } from 'react';
import { Dumbbell, MinusCircle, PlusCircle } from 'lucide-react';

// Standard weight plates in pounds
const AVAILABLE_PLATES = [45, 35, 25, 10, 5, 2.5];
const BARBELL_WEIGHT = 45; // Standard Olympic barbell weight

function calculatePlates(targetWeight: number): number[] {
  if (targetWeight <= BARBELL_WEIGHT) return [];
  
  // We need to calculate for one side only
  const weightPerSide = (targetWeight - BARBELL_WEIGHT) / 2;
  const plates: number[] = [];
  
  let remainingWeight = weightPerSide;
  
  AVAILABLE_PLATES.forEach(plate => {
    while (remainingWeight >= plate) {
      plates.push(plate);
      remainingWeight -= plate;
    }
  });
  
  return plates;
}

function App() {
  const [targetWeight, setTargetWeight] = useState<number>(135);
  
  const plates = useMemo(() => calculatePlates(targetWeight), [targetWeight]);
  
  const handleIncrement = () => {
    setTargetWeight(prev => prev + 5);
  };
  
  const handleDecrement = () => {
    setTargetWeight(prev => Math.max(45, prev - 5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-md mx-auto pt-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Dumbbell className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Plate Calculator</h1>
          <p className="text-gray-400">Calculate plates needed for each side of the barbell</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleDecrement}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <MinusCircle className="w-6 h-6 text-blue-400" />
            </button>
            
            <div className="text-center">
              <div className="text-4xl font-bold">{targetWeight}</div>
              <div className="text-sm text-gray-400">Total Weight (lbs)</div>
            </div>
            
            <button
              onClick={handleIncrement}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <PlusCircle className="w-6 h-6 text-blue-400" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-400 mb-1">Barbell Weight</div>
              <div className="font-semibold">{BARBELL_WEIGHT} lbs</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-center mb-3">
                <div className="text-sm text-gray-400">Plates per side</div>
              </div>
              
              {plates.length > 0 ? (
                <div className="flex flex-wrap gap-2 justify-center">
                  {plates.map((plate, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center font-bold shadow-lg"
                    >
                      {plate}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  Just the barbell
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            Total plates needed: {plates.length * 2} ({plates.length} per side)
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;