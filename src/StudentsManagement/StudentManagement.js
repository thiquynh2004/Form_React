import React, { Component } from 'react';
import SearchStudent from './SearchStudent';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import "./studentManagement.css"

class StudentManagement extends Component {
    render() {
        return (
            <div className = "container">
                <h1>Thông tin sinh viên</h1>
                <StudentForm/>
                <SearchStudent/>
                <StudentList students={this.state}/>
            </div>
        );
    }
}

export default StudentManagement; 
