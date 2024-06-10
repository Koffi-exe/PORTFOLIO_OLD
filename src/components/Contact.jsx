import React from 'react'
import {motion} from 'framer-motion'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='my-20'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch!</h1>
      <motion.div 
      initial={{scale:1}}
      whileHover={{scale:1.5}}
      className="text-center">
        <p className='my-4'>{CONTACT.address}</p>
        <p className=''>{CONTACT.mobile}</p>
        <motion.a 
        
        href='mailto:adithyaaa@outlook.com' className='border-b'>{CONTACT.email}</motion.a>
      </motion.div>
    </div>
  )
}

export default Contact
Contact