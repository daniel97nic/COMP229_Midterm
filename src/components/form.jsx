import React, { useState } from 'react';
import "./form.css";

function Form(){
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [program, setProgram] = useState("");
    const [address, setAddress] = useState("");
    const [highSchool, setHighSchool] = useState(false);
    const [higherSchool, setHigherSchool] = useState(false);
    const [graduation, setGraduation] = useState(false);
    const [postGraduation, setPostGraduation] = useState(false);
    const [other, setOther] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, lastName, email, phone, program, address, highSchool, higherSchool, graduation, postGraduation, other)
        alert(`First Name: ${name} \nLast Name: ${lastName} \nEmail: ${email} \nMobile Number: ${phone} \nProgram: ${program} \nAddress: ${address} \nQualifications: \nHigh School (10th): ${highSchool} \nHigher School (12th): ${higherSchool}  \nBachelors: ${graduation}  \nMasters: ${postGraduation} \nOther: ${other}`);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleProgramChange = (e) => {
        setProgram(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleHighSchoolChange = () => {
        setHighSchool(!highSchool);
    }
    const handleHigherSchoolChange = () => {
        setHigherSchool(!higherSchool);
    }
    const handleGraduationChange = () => {
        setGraduation(!graduation);
    }
    const handlePostGraduationChange = () => {
        setPostGraduation(!postGraduation);
    }
    const handleOther = () => {
        setOther(!other);
    }
    const reset = () => {
        setName("");
        setLastName("");
        setEmail("");
        setPhone();
        setProgram("");
        setAddress("");
        setHighSchool(false);
        setHigherSchool(false);
        setGraduation(false);
        setPostGraduation(false);
        setOther(false);
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <h1>Employee Registration Form</h1>
            <hr></hr>

            <label htmlFor="name">First Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
            <br></br>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" value={lastName} onChange={handleLastNameChange} />
            <br></br>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
            <br></br>

            <label htmlFor="phone">Mobile Number</label>
            <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
            <br></br>

            <label htmlFor="program">Program</label>
            <select id="program" value={program} onChange={handleProgramChange}>
                <option value="Health Informatics">Health Informatics</option>
                <option value="Artificial Intelligence">Artifical Intelligence</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Game Programming">Game Programming</option>
                <option value="Software Technician">Software Technician</option>
            </select>
            <br></br>

            <label htmlFor="address">Address</label>
            <textarea id="address" value={address} onChange={handleAddressChange} />
            <br></br>

            <label htmlFor="qualifications">Qualifications</label>
            <br></br>

            <div className='checkbox-container'>
                <label htmlFor="high-school" className='checkbox-label'>
                <input type="checkbox" className="checkbox" id="high-school" value={highSchool} onChange={handleHighSchoolChange} />High School (10th)</label>
                <label htmlFor="higher-school" className='checkbox-label'>
                <input type="checkbox" className="checkbox" id="higher-school" value={higherSchool} onChange={handleHigherSchoolChange} />Higher School (12th)</label>
                <label htmlFor="graduation" className='checkbox-label'>
                <input type="checkbox" className="checkbox" id="graduation" value={graduation} onChange={handleGraduationChange} />Graduation (Bachelors)</label>
                <label htmlFor="post-graduation" className='checkbox-label'>
                <input type="checkbox" className="checkbox" id="post-graduation" value={postGraduation} onChange={handlePostGraduationChange} />Post Graduation (Masters)</label>
                <label htmlFor="other" className='checkbox-label'>
                <input type="checkbox" id="other" className="checkbox" value={other} onChange={handleOther} />Other</label>
            </div>

            <button type="submit" className='submit-button'>Submit</button>
            <button type="reset" onClick={reset} className='reset-button'>Reset</button>
            <br></br>

        </form>
        </div>  
    );

}

export default Form;
