import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const isSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

  return (
    <nav className='flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300'>
      <Link to='/'>Home</Link>
      <ul className='flex justify-around gap-6'>
        {
            isSignedIn ? (
                <>
                    {/* <Link to='/welcome'><li>Welcome</li></Link> */}
                    <li><button onClick={handleSignOut}>Sign Out</button></li>
                </>
            ) : (
                <>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/signup'><li>Sign Up</li></Link>
                    
                </>
            )
        }
        
      </ul>
    </nav>
  )
}

export default Navbar
