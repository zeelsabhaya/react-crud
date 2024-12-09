import Container from 'react-bootstrap/Container';
import './crud.css'
import { useEffect, useState } from 'react';
const Crud = () => {
    const [input, setinput] = useState({
        id: "",
        name: '',
        dob: '',
        email: '',
        address: '',
        income: '',
    })

    const [indata, setindata] = useState()

    const handelchang = (e) => {
        const { name, value } = e.target
        setinput({ ...input, [name]: value })
    }
    
    const onSubmits = (e) => {
        e.preventDefault()
        console.log(input)
        setindata([input])
        setinput({
            id: "",
            name: '',
            dob: '',
            email: '',
            address: '',
            income: '',
        })
    }

    useEffect(()=>{
        localStorage.setItem("porsan",JSON.stringify(indata))
    },[indata])

    return (
        <>
            <Container className='pt-5'>
                <form action="/action_page.php" onSubmit={onSubmits}>
                    <div className="form-group">
                        <label>Full Name :</label>
                        <input type="text" className="form-control" name="name" value={input.name} onChange={handelchang} />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth :</label>
                        <input type="text" className="form-control" name="dob" value={input.dob} onChange={handelchang} />
                    </div>
                    <div className="form-group">
                        <label>Email address :</label>
                        <input type="email" className="form-control" name="email" value={input.email} onChange={handelchang} />
                    </div>
                    <div className="form-group">
                        <label>Address :</label>
                        <input type="text" className="form-control" name="address" value={input.address} onChange={handelchang} />
                    </div>
                    <div className="form-group">
                        <label>Income :</label>
                        <input type="number" className="form-control" name="income" value={input.income} onChange={handelchang} />
                    </div>

                    <button type="reset" className="btn">Reset</button>
                    <button type="submit" className="btn ms-4">Submit</button>
                </form>
            </Container>
        </>
    )
}

export default Crud