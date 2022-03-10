import Forminput from './Forminput'
import Formoutput from './Formoutput'
import axios from 'axios'
import '../css/App.css'
import {useState, useEffect} from 'react'
const Forms = () => {
    const [data, setData] = useState([]);
    const ggetall = async () => {
        try { 
            const data = await axios.get('http://localhost:3007/users');
            setData(data.data);
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        ggetall();
        return () => {
            setData([]);
        }
    },[])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3007/users/${id}`).then(() => {
            axios.get('http://localhost:3007/users').then((response) => {
                const data = response.data
                setData(data);
            }).catch((err) => {
                console.log(err);
            })
        })
        
    }
    return (
    <div className="container">
    <div className="form_div">
        < Forminput />
    </div>
        <div>
            < Formoutput data={data} handleDelete={handleDelete} />
        </div>
    </div>
    )
}

export default Forms