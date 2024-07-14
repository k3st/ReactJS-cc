// const hello = <h1>Hello React</h1>;
// ReactDOM.render(hello, document.getElementById("root"));

function Calculator(){
    return(

        <div className="calculator">
            <CalcButton value="7"/>
            <CalcButton value="8"/>
            <CalcButton value="9"/>
            <CalcButton className="operator" value="/"/>

            <CalcButton value="4"/>
            <CalcButton value="5"/>
            <CalcButton value="6"/>
            <CalcButton className="operator" value="*"/>

            <CalcButton value="1"/>
            <CalcButton value="2"/>
            <CalcButton value="3"/>
            <CalcButton className="operator" value="-"/>

            <CalcButton value="C"/>
            <CalcButton value="0"/>
            <CalcButton value="="/>
            <CalcButton className="operator" value="+"/>
        </div>
    )
}
function CalcButton(property) {
    return <button className={property.className}> {property.value}</button>

}

ReactDOM.render(<div classname="app-container"><Calculator/></div>,document.getElementById("root"));
