import React from 'react'

export default function AniCard({ name, image, description}) {
    return (
        <div className="mx-auto lg:w-full lg:flex lg:flex-row lg:h-full mx-auto p-4">
            <img className='rounded tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg: rounded-bl-md lg:rounded-br'
                src={image} alt='' 
            />
            <div className='mx-auto lg:w-full lg:h-full bg-white p-4 rounded-br-md rounded-bl-md bg-white'>
                <h2 className='text-gray-700 font-semibold p-2'>{name}</h2>
                <p className='text-sm text-gray-600 mt-1 p-2'>{description}</p>
            </div>
        </div>
    )
}
