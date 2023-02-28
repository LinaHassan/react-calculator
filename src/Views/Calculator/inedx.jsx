import { useState, useContext, useEffect } from "react";
import "./Calculator.css";
import DisplayScreen from "./DisplayScreen";
import { evaluate } from "mathjs";
import Operatorkeys from "./keys/keys";
import { historyContext } from "../../context";

const Calculator = () => {
  const [calc, setCalac] = useState("");
  const [result, setResult] = useState("");

  const { setHistory, editValue } = useContext(historyContext);

  const ops = ["+", "-", "/", "*", "."];
  useEffect(() => {
    setCalac(editValue);
  }, [editValue]);

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalac((prevCalc) => prevCalc + value);
    if (!ops.includes(value)) {
      try {
        setResult(evaluate((prevCalc) => prevCalc + value).toString());
      } catch (error) {
        setResult("");
      }
    }
  };

  const calculate = () => {
    const value = evaluate(calc).toString();

    setCalac(value);

    const equationObject = { equation: calc, answer: value };

    setHistory((prevHist) => [...prevHist, equationObject]);

    setResult("");
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalac(value);
  };
  const clearAll = () => {
    if (calc === "") {
      return;
    }
    setCalac("");
    setResult("");
  };
  return (
    <>
      <main>
        <div className="calculator-body">
          <DisplayScreen calc={calc} result={result} />
          <Operatorkeys
            updateCalc={updateCalc}
            calculate={calculate}
            deleteLast={deleteLast}
            clearAll={clearAll}
          />
        </div>
      </main>
    </>
  );
};

export default Calculator;
