import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios.get('http://localhost:4000/users') // I was getting error while using login instead of users
        .then((res) => {
            console.log(res.data)
        })
    }

    const handleLogin = async (event) => {
        try {
            const response = await axios.post('http://localhost:4000/login', {email, password})
            const token = response.data.token
            setEmail('')
            setPassword('')
            fetchUsers();
            navigate('/welcome')
            window.location.reload()
            localStorage.setItem('token', token)
        } catch (error) {
            console.log('Login Error!')
        }
    }

  return (
    <div className='w-full h-screen flex'>
      <div className='w-[100%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
        <form className='text-center border rounded-lg w-[600px] h-[300px] p-9' onSubmit={handleLogin}>
            
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
 
            <button className='w-[100px] h-[40px] rounded-xl bg-zinc-700' type='submit'>Log In</button>

        </form>
      </div>
    </div>
  )
}

export default Login
