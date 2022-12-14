// const Keypad = (props, ref) => {
//   return (
// import React from "react";
// import Draw from "../footer/Footer";
const Keypad = (props) => {
  return (
    <>
    <section className="keypad">
      <button
        className="key"
        value="7"
        onClick={() => {
          props.updateCalc("7");
        }}
      >
        7
      </button>
      <button className="key" value="8" onClick={() => props.updateCalc("8")}>
        8
      </button>
      <button className="key" value="9" onClick={() => props.updateCalc("9")}>
        9
      </button>
      <button className="del" id="del" onClick={props.del}>
        DEL
      </button>
      <button className="equals-key" id="equals-key" value="=" onClick={()=> props.updateCalc("=")}>
        =
      </button>
      <button className="key" value="4" onClick={() => props.updateCalc("4")}>
        4
      </button>
      <button className="key" value="5" onClick={() => props.updateCalc("5")}>
        5
      </button>
      <button className="key" value="6" onClick={() => props.updateCalc("6")}>
        6
      </button>
      <button
        className="operator"
        value="+"
        onClick={() => props.updateCalc("+")}
      >
        +
      </button>
      <button className="key" value="1" onClick={() => props.updateCalc("1")}>
        1
      </button>
      <button className="key" value="2" onClick={() => props.updateCalc("2")}>
        2
      </button>
      <button className="key" value="3" onClick={() => props.updateCalc("3")}>
        3
      </button>
      <button
        className="operator"
        value="-"
        onClick={() => props.updateCalc("-")}
      >
        -
      </button>
      <button className="key" value="." onClick={() => props.updateCalc(".")}>
        .
      </button>
      <button className="key" value="0" onClick={() => props.updateCalc("0")}>
        0
      </button>
      <button
        className="operator"
        value="/"
        onClick={() => props.updateCalc("/")}
      >
        /
      </button>
      <button
        className="operator"
        value="*"
        onClick={() => props.updateCalc("*")}
      >
        *
      </button>
      <button
        className="operator"
        value="x"
        onClick={() => props.updateCalc("x")}
      >
        <i>x</i>
      </button>
      <button
        className="operator"
        value="y"
        onClick={() => props.updateCalc("y")}
      >
        <i>y</i>
      </button>
      <button
        className="operator"
        value="z"
        onClick={() => props.updateCalc("z")}
      >
        <i>z</i>
      </button>
      <button
        className="operator"
        value="^"
        onClick={() => props.updateCalc("^")}
      >
        ^
      </button>
      <button className="operator" value="!" onClick={() => props.updateCalc("!")}>
        !
      </button>
      <button className="operator" value="cos" onClick={() => props.updateCalc("cos(")}>
        cos
      </button>
      <button className="operator" value="sin" onClick={() => props.updateCalc("sin(")}>
        sin
      </button>
      <button className="func" value="integral(" onClick={() => props.updateCalc("integral(")}>
        int
      </button>
      <button className="func" value="d(" onClick={() => props.updateCalc("d(")}>
        der
      </button>
      <button className="func" value="simplify" onClick={() => props.updateCalc("simplify(")}>
        sim
      </button>
      <button className="func" value="factorial(" onClick={() => props.updateCalc("factorial(")}>
        fact
      </button>
      <button className="operator" value="(" onClick={() => props.updateCalc("(")}>
        (
      </button>
      <button className="operator" value=")" onClick={() => props.updateCalc(")")}>
        )
      </button>
      <button className="func" value="systemOfEquations" onClick={() => props.updateCalc("syseq(")}>
        syseq
      </button>
      <button className="func" value="expansion" onClick={() => props.updateCalc("expa(")}>
        exp
      </button>
      <button className="func" value="roots(" onClick={() => props.updateCalc("roots(")}>
        roots
      </button>
      <button
        className="reset"
        id="reset-key"
        value="reset"
        onClick={props.clear}
      >
        RESET
      </button>
      <button className="solve" id="solve" onClick={props.calculate}>
        SOLVE
      </button>
    </section>
    </>
  );
};
export default Keypad;
