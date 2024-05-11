import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList(props) {
  const blogs = props.blogs
  const isPending = props.isPending
  return (
    <div className='container my-5'>
      {isPending && <div>yükleniyor</div>}
      {blogs.map(blog => (
        <div className="p-5 text-center rounded-3 bg-light border" key={blog.id}>
          <Link style={{ textDecoration: "none" }} to={`/blogs/${blog.id}`}>
            <h1 className="p-2 " style={{ color: "red" }}>{blog.title}</h1>

            <p>{blog.author}</p>
          </Link>
        </div>
      ))}</div>
  )
}
