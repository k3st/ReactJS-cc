// const hello = <h1>Hello React</h1>;
// ReactDOM.render(hello, document.getElementById("root"));

function Calculator() {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  function handleNumber(value) {
    let newValue = value;

    if (!calc.isInitial) {
      newValue = calc.current + value;
    }

    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp,
    });
  }

  function handleOperator(value) {
    console.log("func op ", value);
    alert("click");
    const total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value,
    });
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  function handleEquals() {
    let total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: "",
    });
  }

  function doCalculation() {
    let total = parseFloat(calc.total);
    switch (calc.preOp) {
      case "+":
        total += parseFloat(calc.current);
        break;
      case "-":
        total -= parseFloat(calc.current);
        break;
      case "*":
        total *= parseFloat(calc.current);
        break;
      case "/":
        total /= parseFloat(calc.current);
        break;
      default:
        total = parseFloat(calc.current);
    }

    return total;
  }

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

      <CalcButton value="C" onClick={handleClear} />
      <CalcButton value="0" onClick={handleNumber} />
      <CalcButton value="=" onClick={handleEquals} />
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
  <div className="app-container">
    <Calculator />
  </div>,
  document.getElementById("root")
);
