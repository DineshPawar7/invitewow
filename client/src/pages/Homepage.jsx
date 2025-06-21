import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import InvitationCards from '../components/InvitationCards'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'

const Homepage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/dashboard')
    }


  return (
    <div className=''>
        <Hero />
        <InvitationCards />
        <HowItWorks />
        <Features />
        
    </div>
  )
}

export default Homepage