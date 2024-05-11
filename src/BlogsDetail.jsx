import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'

export default function BlogsDetail() {
    const { id } = useParams()
    const { data: blogs, isPending } = useFetch("http://localhost:8000/blogs/" + id)
    const navigate = useNavigate()
    const handleDelete = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="p-5 text-center rounded-3 bg-light border container my-5 ">
            <h1>{id}</h1>

            {isPending && <div>loading...</div>}

            <h1 className='text-danger'>{blogs.title}</h1>
            <p className='text-primary'> {blogs.author}</p>
            <div>
                <p>{blogs.body}</p>
            </div>

            <button onClick={handleDelete}>Delete</button>

        </div>
    )
}
