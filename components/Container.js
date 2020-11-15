import React from 'react'

export default function Container({ name, image }) {
    return (
        <div>
            <h1 className='text-4xl mb-8 text-center'>{name}</h1>
            <div className='justify-items-center'>
                <img src={image} className='h-25'/>
            </div>
        </div>   
    )
};