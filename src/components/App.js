import React, { useState } from 'react'
import Review from './Review'

const App = () => {
    
  return (
    <div>
        <div className='container'>
            <h1 id='review-heading'>Our Reviews</h1>
            
            <Review />
            
        
        </div>
    </div>
  )
}

export default App

