import React, { useEffect } from 'react'
import appwriteService from '../appwrite/config'
import Container from 'postcss/lib/container'
import { PostCard } from '../components'


function AllPosts() {
    const [post,setPosts]=useState([])
        useEffect(()=>{},[])
        appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
})
  return (
    <div className='w-full py-8'>
        <Container>
           <div className='flex flex-wrap'>
            {post.map((post)=>(
                <div key={post.id} className='p-2 w-1/4'>
                    <PostCard post={post}/>
                </div>

            ))}
           </div>
        </Container>
      
    </div>
  )
}

export default AllPosts
