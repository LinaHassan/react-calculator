import "../Calculator.css";

const Keys = ({ updateCalc, calculate, deleteLast, clearAll }) => {
  
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <div className="Btn-Section">
      <button className=" operation-btn  Delete-btn" onClick={deleteLast}>
        Delete
      </button>
      <button onClick={clearAll} className=" operation-btn">
        C
      </button>
      <button className="operation-btn plus" onClick={() => updateCalc("+")}>
        +
      </button>
      <button className="operation-btn minus" onClick={() => updateCalc("-")}>
        -
      </button>
      <button
        className="operation-btn multiple "
        onClick={() => updateCalc("*")}
      >
        *
      </button>
      <button className="operation-btn divide " onClick={() => updateCalc("/")}>
        /
      </button>
      <button onClick={calculate} className="operation-btn equal-btn">
        =
      </button>

      {createDigits()}
      <button onClick={() => updateCalc("0")}>0</button>
      <button onClick={() => updateCalc(".")}>.</button>
    </div>
  );
};

export default Keys;
