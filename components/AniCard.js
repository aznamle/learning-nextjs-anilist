import React from 'react'

export default function AniCard({ name, image, description}) {
    return (
        <div className="mx-auto lg:min-w-full lg:flex lg:flex-row lg:h-full md:w-full mx-auto shadow-md hover:shadow-2xl transition duration-500">
            <img className='rounded tr-md rounded-tl-md h-full w-full lg:h-auto lg:w-full lg: rounded-bl-md lg:rounded-br '
                src={image} alt='' 
            />
            <div className='mx-auto lg:w-full lg:h-full bg-white p-4 rounded-br-md rounded-bl-md bg-white'>
                <h2 className='text-gray-700 font-semibold p-2'>{name}</h2>
                <p className='text-sm text-gray-600 mt-1 p-2'>{description}</p>
            </div>
        </div>
    )
}
