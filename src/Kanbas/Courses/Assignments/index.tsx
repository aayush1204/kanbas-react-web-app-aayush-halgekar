import React, { useState } from 'react';
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaChevronDown, FaBook } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./reducer";
import { KanbasState } from "../../store";


function Assignments() {
  const { courseId } = useParams();

  const intialAssignment =  {
    title: "New Assignment Title",
    course: "Assignment's Course",
    description: "New Description",
    points: "100",
    dueDate: "2023-09-18",
    availableFromDate: "2023-09-11",
    availableUntilDate: "2023-09-18",
  }
  // const [assignmentList, setAssignmentList] = useState<any[]>(db.assignments);
  
  // const [assignment, setAssignment] = useState({
  //   _id: "New ID",
  //   title: "New Assignment Title",
  //   course: courseId,
  // });

  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();


  // const addAssignment = (assignment: any) => {
  //   const newAssignment = { ...assignment,
  //     _id: new Date().getTime().toString() };
  //   const newAssignmentList = [newAssignment, ...assignmentList];
  //   setAssignmentList(newAssignmentList);
  // };

  // const deleteAssignment = (assignmentId: string) => {
  //   const newAssignmentList = assignmentList.filter(
  //     (assignment) => assignment._id !== assignmentId );
  //   setAssignmentList(newAssignmentList);
  // };

  // const updateAssignment = () => {
  //   const newAssignmentList = assignmentList.map((m) => {
  //     if (m._id === assignment._id) {
  //       return assignment;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setAssignmentList(newAssignmentList);
  // };



  
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="row top-bar">
        <div className="col-4">
          <input type="text" className="form-control" placeholder="Search for Assignment" onChange={handleChange}/>
        </div>
        <div className="col top-button-bar d-flex justify-content-end">
          <a> Group </a>
    
          {/* <a className = "red" ><FaPlus /> Assignment </a> */}

          <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`}>
        <button
        type="submit"
        className="btn btn-danger float-end me-1 wd-kanbas-save-profile btn-danger" onClick={() => dispatch(setAssignment(intialAssignment))}>
        <i className="fa fa-plus"></i>  
        <span className="wd-left-margin-10" >Assignment</span>
        </button>
        </Link>
    
          <a> <FaEllipsisV className="me-2 custom" /> </a>
        </div>
      </div>

      <hr></hr>
      
      <ul className="list-group wd-assignments">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <span className='percent-box'>
                  40% of total
                </span>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
              </span>
          </div>
          <ul className="list-group">
          <li className="list-group-item">
          {/* <button onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>

                Add</button>
                <hr></hr>
                <button onClick={() => dispatch(updateAssignment(assignment))}>
                Update
        </button> */}
        {/* <hr></hr> */}
              {/* <input value={assignment._id}
                onChange={(e) => dispatch(
                  setAssignment({ ...assignment, _id: e.target.value }))}
              />
              <hr></hr>
              <textarea value={assignment.title}
                onChange={(e) => dispatch(
                  setAssignment({ ...assignment, title: e.target.value }))}
              /> */}
            </li>

            {assignmentList
            .filter(
                (assignment) => assignment.course === courseId)
              .map((assignment) => (
              <li className="list-group-item">
                
                <button
                  onClick={() => dispatch(setAssignment(assignment))}>
                  Edit
                </button>
              
                <button
                  onClick={() => dispatch(deleteAssignment(assignment._id))}>

                  Delete
                </button>

                <FaEllipsisV className="me-2" />
                <FaBook className="me-2"/>
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
  );
}


export default Assignments;

