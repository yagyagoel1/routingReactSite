import React from "react";

 const Contact = ()=>{
    return (
        <div className="contact">
            <div className="container">
                <div className="form-container">
                    <form >
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label >Name</label>
                            <input type="text" placeholder="Enter your Name"/>

                        </div>
                        <div>
                            <label >Email</label>
                            <input type="email" placeholder="Enter your email"/>

                            
                        </div>
                        <div>
                            <label >Message</label>
                            <input rows ='10' placeholder="Enter your Message"/>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
 }