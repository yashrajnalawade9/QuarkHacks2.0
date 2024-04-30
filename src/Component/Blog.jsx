import CreateBlog from "./CreateBlog"
import {useState, useEffect} from 'react'

  
  export default function Example() {

    const [posts, setPost] = useState([{}])

    useEffect(()=>{
        fetch('http://localhost:5000/blog')
        .then(res=>res.json())
        .then(data=>{
            setPost(data)
        })
    },[])

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                grow and learn with our community.
                </p>
          </div>
          
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.created_date} className="text-gray-500">
                    {post.created_date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>

                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        {post.name}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        <CreateBlog/>
        </div>

      </div>
    )
  }
  