import { useState } from "react";
import { useSpring, animated } from "react-spring";

function App() {
  const [count, setCount] = useState(0);

  const countAnimation = useSpring({ number: count, from: { number: 0 } });

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleIncrement = () => {
    if (count < 50) {
      setCount(count + 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>
        <h4>But you can only count to 50</h4>
        <animated.p className="text-6xl font-bold my-6 transform transition-all duration-300">
          {countAnimation.number}
        </animated.p>
        <div className="space-x-4 mt-11">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
