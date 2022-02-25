import React from "react";
import  "./Home.css";

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
                    </div>

                    <div className="btn_design">
                        <button type="submit" className="faculty_btn">Faculty</button>
                    </div>
                </div>
            </div>

        </>
    )
}