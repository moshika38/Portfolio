import React from 'react'
import Image from 'next/image'

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

function InfoCard(
    {icon,title,description}:InfoCardProps
) {
  return (
    <div className='flex justify-self-start items-center gap-3 my-5'>
        <div className="icon w-10 h-10 bg-linear-to-t from-border-dark to-background withBorder relative rounded-[10px] overflow-hidden flex justify-center items-center">
            <div  ><Image src={icon} alt={title} width={18} height={18} /></div>
        </div>
        <div className="text">
            <p className='uppercase text-xs text-text-muted'>{title}</p>
            <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default InfoCard