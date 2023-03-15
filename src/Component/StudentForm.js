import React from 'react'
import { useLocation , useNavigate , useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateStudentDetailAction } from '../Redux/Actions/StudentAction';
import Nav from './Nav';
import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { addNewStudentAction } from '../Redux/Actions/StudentAction';
import'./Style.css'

export default function StudentForm() {
//   const DataContext=useContext(ContextData);
//   const index=useLocation().state.data;

//   const updateObj={
//     name:DataContext.entries[index].name,
//     age:DataContext.entries[index].age,
//     course:DataContext.entries[index].course,
//     batch:DataContext.entries[index].batch
//   }
const dispatch=useDispatch();
const location = useLocation();
const params = useParams();
const navigation = useNavigate();
const [formData, setFormData] = useState({
  name: "",
  age: "",
  course: "",
  batch: "",
});
const isEdit = useMemo(() => {
  if (params.studentId) return true;
  else return false;
}, [params]);
useEffect(() => {
  const data = location.state;
  if (data) {
    setFormData(data);
  }
}, [location.state]);

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const  handleAddOrUpdate=()=>{
    console.log("handleUpdate called");
    if (isEdit) {
      dispatch(updateStudentDetailAction(formData));
    } else {
      dispatch(
        addNewStudentAction({ ...formData, id: `id-${new Date().getTime()}` })
      );
    }
    Cancel();
  }
  const Cancel=()=>{
    navigation(-1)
  }
  const isDisabled = () => {
    if (formData.name && formData.age && formData.batch && formData.course) {
      return false;
    }
    return true;
  };
  return (
    <>
    <Nav/>
    <h1>{isEdit ? "Edit Student Detail" : "Add New Student"}</h1>
    <div className='Flexbox'>
      <div>
        <label>Name:</label>
<input className='newInput'placeholder={"name"}name='name' onChange={handleChange} value={formData.name}></input>
<label>Age:</label>
<input className='newInput' placeholder={"age"} name='age' onChange={handleChange}   value={formData.age}></input>
</div>
<div>
  <label>Course:</label>
<input className='newInput' placeholder={"course"} name='course' onChange={handleChange}  value={formData.course}></input>
<label>Batch:</label>
<input className='newInput' placeholder={"batch"} name='batch' onChange={handleChange}  value={formData.batch}></input>
</div>
</div>
<div className='newButton'>
   <button  className='buttonDesign' disabled={isDisabled()} onClick={handleAddOrUpdate}>{isEdit ? "Update" : "Add"}</button>
   <button  className='buttonDesign cancel'onClick={Cancel}>Cancel</button>
   </div>
    </>
  )
}
