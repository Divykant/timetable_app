import React from "react";
import  "./Home.css";
import Student from "../Student/Student";
import Faculty from "../Faculty/Faculty";

export default function Home(){
    return(
        <>
            <div className="main_div">
                <div className="top_headings">
                    <h1>Welcome to the TimeTable </h1>
                    <h4>Electrical & Electronics Department - AKGEC</h4>
                </div>


                <div className="btn">
                    <div className="btn_design" >
                        <button type="submit" className="student_btn">Student</button>
                        <a href="#" className="student_btn">Student</a>
                    </div>

                    <div className="btn_design">
                        <button type="submit" className="faculty_btn">Faculty</button>
                        <a href="#" className="faculty_btn">Faculty</a>
                    </div>
                </div>
            </div>

        </>
    )
}