import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);

  const [numbersAllowed, setNumbersAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz";

    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+=";

    for (let index = 0; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbersAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto bg-gray-700 rounded-lg px-4 my-40 py-4 shadow-lg text-orange-500">
        <h1 className="text-white text-center text-3xl">Password Generator</h1>
        <div className="flex overflow-hidden rounded-lg mt-6">
          <input
            type="text"
            className="w-full outline-none py-3 px-3 text-2xl font-semibold"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
          />

          <button
            className=" outline-none py-1 px-5 text-white shrink-0 shadow-lg bg-blue-700"
            onClick={copyToClipboard}
          >
            COPY
          </button>
        </div>
        <div className="mt-6 text-lg flex gap-x-4">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length : {length}</label>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numbersAllowed}
              onChange={() => setNumbersAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
