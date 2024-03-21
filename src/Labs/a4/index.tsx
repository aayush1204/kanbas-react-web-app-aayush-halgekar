
import React from "react";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import StringStateVariables from "./StringStateVariables";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
  return(
    <>
      <h1>Assignment 4</h1>
      <PassingFunctions theFunction={sayHello} />
      <ArrayStateVariable/>
      <BooleanStateVariables/>
      <ClickEvent/>
      <Counter/>
      <DateStateVariable/>
      <EventObject/>
      <ObjectStateVariable/>
      <ParentStateComponent/>
      <PassingDataOnEvent/>
      <StringStateVariables/>
      <ReduxExamples/>
    </>
  );
};
export default Assignment4;