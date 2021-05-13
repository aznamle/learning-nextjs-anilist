import React from 'react'

export default function AniCard({ name, image, description}) {
    return (
        <div className="mx-auto lg:flex lg:h-full max-w-screen-2xl shadow-md hover:shadow-2xl transition duration-500">
            <img className='rounded tr-md rounded-tl-md h-25 w-full  lg:w-1/5 rounded-bl-md lg:rounded-br '
                src={image} alt='' 
            />
            <div className='mx-auto lg:w-full lg:h-full bg-white p-4 rounded-br-md rounded-bl-md w-4/5'>
                <h2 className='text-gray-700 font-semibold p-2 truncate...'>{name}</h2>
                <p className='text-sm text-gray-600 mt-1 p-2 overflow-y-auto h-28'>{description}</p>
            </div>
        </div>
    )
}
