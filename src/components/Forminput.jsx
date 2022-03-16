import axios from 'axios';
import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import '../css/forminput.css'
const Forminput = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [form, setForm] = useState({
        name : '',
        age : '',
        address : '',
        department : '',
        salary : '',
        married : 'not-married',
        id : ''
    });
    
    const handleForm = (e) => {
        const { id, value} = e.target;
        if(isChecked){
            setForm({
                ...form,
                married : "married"
            })
        }
        if(value === ""){
            return;
        }
        setForm({
            ...form,
            [id] : value
        })
    }
    const submitFunction = (e) => {
        if(form.name === "" || form.age === "" || form.address === "" || form.department === "" || form.salary === ""){
            alert("Please enter details")
            return;
        }
        axios.post('https://face-server-app2323.herokuapp.com/users', {...form, id : uuid()});
    }
    
    return (
    <form className="form">
        <p>Name</p>
        <input id='name' type="text" placeholder="Enter User Name" onChange={(e)=>{handleForm(e)}}/>
        <p>Age</p>
        <input id='age' type="number" placeholder="Enter Age" onChange={(e)=>{handleForm(e)}}/>
        <p>Address</p>
        <input id='address'type="text" placeholder="Enter Address" onChange={(e)=>{handleForm(e)}}/>
        <p>Department</p>
        <select  id="department" onChange={(e)=>{handleForm(e)}} >
            <option value="Marketing">
                Marketing
            </option>
            <option value="Sales">
                Sales
            </option>
            <option value="I.T">
                I.T 
            </option>
        </select>
        <p>Salary</p>
        <input id='salary' type="number" placeholder="Salary" onChange={(e)=>{handleForm(e)}}/>
        <div>
            <input type="checkbox" id="married" value="married" onClick={(e)=> {handleForm(e)}} />
            <label htmlFor="married" onClick={()=> {
                setIsChecked(true)
            }}>
                Married 
            </label>
            <input type="checkbox"  id="married2" value="not Married" name="not_married" />
            <label htmlFor="married2" onClick={()=> {setIsChecked(false)}}>
                Not-married
            </label>
        </div>
        <input type="submit" value='submit' onClick={(e)=>{submitFunction(e)}}/>
    </form>
    )
}

export default Forminput