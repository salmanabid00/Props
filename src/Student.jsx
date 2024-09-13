import React from 'react'

function Student(props) {
  return (
    <div className="user-profile">
    <p>Name: <span>{props.name}</span></p>
    <p>Age: <span>{props.age}</span></p>
    <p>Student: <span>{props.isStudent ? "yes" : "no"}</span></p>
  </div>
  )
}

export default Student
