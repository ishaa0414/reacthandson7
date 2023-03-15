import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
export default function RouterComponent() {

  
    return (
      <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/student' element={<StudentList />}/>
      <Route path='/editStudent:studentId' element={<StudentForm/>}/>
      <Route path='/addStudent' element={<StudentForm />}/>
    </Routes>
    
    </BrowserRouter>
      </>
    );
  }