/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useId } from "react";

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     ed = "usd",
//     amountDisable = false,
//     currencyDisable = false,
//     className = "",
// }) {

//     const inputId = useId()
//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className="w-1/2">
//                 <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
//                     {label}
//                 </label>
//                 <input
//                     id = {useId}
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled = {amountDisable}
//                     value={amount}
//                     onChange={ (e) => (onAmountChange && onAmountChange(Number(e.target.value)))}
//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     disabled = {currencyDisable}
//                     value={ed}
//                     onChange={ (e) => (onCurrencyChange && onCurrencyChange(e.target.value))}
//                 >

//                     {currencyOptions.map( (currency) => (
//                         <option key={currency} value={currency}>
//                             {currency}
//                         </option>
//                     ))}

//                 </select>
//             </div>
//         </div>
//     );
// }

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const inputId = useId();

  return (
    <div className="bg-white flex px-2 rounded-lg text-2xl m-2">
      <div className="w-1/2 m-2 flex flex-col">
        <label htmlFor={inputId} className="inline-block mb-4">
          {label}
        </label>
        <input
          id={inputId}
          type="number"
          className="outline-none bg-transparent py-1"
          value={amount}
          placeholder="Amount"
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>

      <div className="w-1/2 m-2 flex justify-end text-right flex-col">
        <p className="text-black/40 w-full">Currency Type</p>

        <div className="m-2 px-2 py-2">
          <select
            name=""
            id=""
            value={selectedCurrency}
            disabled={currencyDisable}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            className="rounded-lg px-6 py-2 bg-gray-100 cursor-pointer outline-none"
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
export default InputBox;
