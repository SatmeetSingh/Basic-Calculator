/* eslint-disable react/prop-types */
function Input({ input, setinput, result }) {
  return (
    <div>
      <input
        className="border-2 w-full py-3"
        type="text"
        placeholder="Type Here"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        readOnly
      />
      <input
        className="border-2 w-full py-3"
        type="text"
        value={result}
        readOnly
      />
    </div>
  );
}

export default Input;
