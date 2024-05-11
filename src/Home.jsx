import BlogList from './BlogList'
import useFetch from './useFetch'

export default function Home() {
    const {data:blogs,isPending } =useFetch("http://localhost:8000/blogs")
  
    return (
    <div >
        <BlogList blogs={blogs} isPending={isPending}/> 
    </div>
  )
}
