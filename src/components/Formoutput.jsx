import '../css/formoutput.css'
const Formoutput = ({data, handleDelete}) => {
  return (
    <>
        <table>
                    <thead className="thead">
                        <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>address</th>
                        <th>department</th>
                        <th>salary</th>
                        <th>status</th>
                        <th>Remove user</th>
                        </tr>
                    </thead>
            {data.length === 0 ? 
                <tbody>
                    <tr>
                        <th>no data</th>
                    </tr>
                </tbody>
            : data.map((e)=>(
                    <tbody className="tbody" key={e.id}>
                        <tr>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                        <td>{e.department}</td>
                        <td>{e.salary}</td>
                        <td>{e.married}</td>
                        <td className='delete' onClick={()=> {handleDelete(e.id)}}>
                            Del
                        </td>
                        </tr>
                    </tbody>
            ))}
            </table>
    </>
  )
}

export default Formoutput