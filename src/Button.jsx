/* eslint-disable react/prop-types */
function Button({ inputValue, handleClear, handleCalculated }) {
  return (
    <div className="grid grid-rows-4 grid-flow-col h-[78vh]">
      <button
        className="hover:bg-blue-400 bg-blue-600 text-white border-2"
        onClick={handleClear}
      >
        c
      </button>
      <button
        className="bg-blue-600 text-white border-2  py-3 hover:bg-blue-400"
        onClick={() => inputValue(1)}
      >
        1
      </button>
      <button
        className="hover:bg-blue-400 bg-blue-600 text-white border-2"
        onClick={() => inputValue(2)}
      >
        2
      </button>
      <button
        className="bg-blue-600 text-white border-2 hover:bg-blue-400"
        onClick={() => inputValue(3)}
      >
        3
      </button>
      <button
        className="bg-blue-600 text-white hover:bg-blue-400 border-2"
        onClick={() => inputValue("+")}
      >
        +
      </button>
      <button
        className="hover:bg-blue-400 bg-blue-600 text-white border-2"
        onClick={() => inputValue(4)}
      >
        4
      </button>
      <button
        className="hover:bg-blue-400 bg-blue-600 text-white border-2"
        onClick={() => inputValue(5)}
      >
        5
      </button>
      <button
        className="hover:bg-blue-400 bg-blue-600 text-white border-2"
        onClick={() => inputValue(6)}
      >
        6
      </button>
      <button
        className="hover:bg-blue-400 bg-blue-600 text-white border-2"
        onClick={() => inputValue("-")}
      >
        -
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-400 text-white border-2"
        onClick={() => inputValue(7)}
      >
        7
      </button>
      <button
        className="bg-blue-600 text-white border-2 hover:bg-blue-400"
        onClick={() => inputValue(8)}
      >
        8
      </button>
      <button
        className="hover:bg-blue-400 bg-blue-600 text-white border-2"
        onClick={() => inputValue(9)}
      >
        9
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-400 text-white border-2"
        onClick={() => inputValue("/")}
      >
        /
      </button>
      <button
        className="bg-blue-600 text-white hover:bg-blue-400 border-2"
        onClick={() => inputValue("*")}
      >
        *
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-400 text-white border-2"
        onClick={handleCalculated}
      >
        =
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-400 text-white border-2"
        onClick={() => inputValue(0)}
      >
        0
      </button>
    </div>
  );
}

export default Button;
