// const hello = <h1>Hello React</h1>;
// ReactDOM.render(hello, document.getElementById("root"));

function Calculator() {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
  });
  function handleNumber(value) {
    let newValue = value;

    newValue = calc.current + value;

    setCalc({ current: newValue, total: calc.total });
  }
  function handleOperator() {}

  function renderDisplay() {
    return calc.current;
  }
  return (
    <div className="calculator">
      <div className="display"> {renderDisplay()} </div>
      <CalcButton value="7" onClick={handleNumber} />
      <CalcButton value="8" onClick={handleNumber} />
      <CalcButton value="9" onClick={handleNumber} />
      <CalcButton className="operator" value="/" onClick={handleOperator} />

      <CalcButton value="4" onClick={handleNumber} />
      <CalcButton value="5" onClick={handleNumber} />
      <CalcButton value="6" onClick={handleNumber} />
      <CalcButton className="operator" value="*" onClick={handleOperator} />

      <CalcButton value="1" onClick={handleNumber} />
      <CalcButton value="2" onClick={handleNumber} />
      <CalcButton value="3" onClick={handleNumber} />
      <CalcButton className="operator" value="-" onClick={handleOperator} />

      <CalcButton value="C" onClick={handleOperator} />
      <CalcButton value="0" onClick={handleNumber} />
      <CalcButton value="=" onClick={handleOperator} />
      <CalcButton className="operator" value="+" onClick={handleOperator} />
    </div>
  );
}
function CalcButton(property) {
  return (
    <button
      className={property.className}
      onClick={() => property.onClick(property.value)}
    >
      {property.value}
    </button>
  );
}

ReactDOM.render(
  <div classname="app-container">
    <Calculator />
  </div>,
  document.getElementById("root")
);
