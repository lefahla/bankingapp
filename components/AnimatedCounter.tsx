'use client'

import CountUp from 'react-countup'

const AnimatedCounter = (
    {amount}:{amount: number}
) => {
  return (
    <div className='w-full'> 
        {/* Top right amount on client dashboard
          */}
        <CountUp 
            end={amount}
            prefix='R'
            decimal=','
            duration={2.75}
            decimals={2}
        />
    </div>
  )
}

export default AnimatedCounter