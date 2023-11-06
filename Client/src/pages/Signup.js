import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios.get('http://localhost:4000/users')
        .then((res) => {
            console.log(res.data)
        })
    }

    const handleRegister = () => {
        axios
        .post('http://localhost:4000/register-user', {name, email, username, password})
        .then(() => {
            alert("Registration Successful!")
            setEmail('')
            setName('')
            setPassword('')
            setUsername('')
            fetchUsers()
            navigate('/login')
        }).catch((error) => {
            console.log('Unable to register user!')
        })
    }


  return (
    <div className='w-full h-screen flex'>
      <div className='w-[100%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
        <form className='text-center border rounded-lg w-[600px] h-[500px] p-9' onSubmit={handleRegister}>
            
            <label>Name</label>
            <br />
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-3' type='text' value={name}
            onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label>Username</label>
            <br />
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-3' type='text' value={username}
            onChange={(e) => setUsername(e.target.value)} />
            <br />
            <br />
            <label>Email</label>
            <br />
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-3' type='email' value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-3' type='password' value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <br />
 
            <button className='w-[100px] h-[40px] rounded-xl bg-zinc-700' type='submit'>Sign Up</button>

        </form>
      </div>
    </div>
  )
}

export default Signup
