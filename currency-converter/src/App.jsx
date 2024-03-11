import { InputBox } from "./components";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    convert()
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-3xl mx-auto py-4 bg-white/50 border border-gray-60 backdrop-blur-sm">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={() => setAmount(amount)}
              selectedCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className=" relative flex w-full">
            <button
              className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-white outline-none bg-blue-600 text-white px-4 py-2"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full">
          <InputBox
              label="To"
              key={`${from}-${to}`}
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={() => setConvertedAmount(convertedAmount)}
              selectedCurrency={to}
              onAmountChange={(amount) => setConvertedAmount(amount)}
              amountDisable
            />
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs bg-blue-600 text-white px-4 py-3 rounded-lg border-2 "
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
