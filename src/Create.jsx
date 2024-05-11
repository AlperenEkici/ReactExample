import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [title, setTitle] = useState('hello')
    const [body, setBody] = useState('body')
    const [author, setAuthor] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            navigate('/')
        })
    }
    return (
        <div className='container '>
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit} className='d-flex flex-column '>
                <div className='d-flex justify-content-center'>
                    <label >Blog title:</label>
                    <input type="text" required placeholder='Yaz'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />

                    <label >Blog author:</label>
                    <select value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}>
                        <option value="">Seçiniz</option>
                        <option value="alperen">Alperen</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                </div>
                <label >Blog body:</label>
                <textarea className='p-2' type="required" placeholder='Yaz'
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }} />




                <button className='mt-4 mx-auto'>Add blog</button>
            </form>

        </div>
    )
}
