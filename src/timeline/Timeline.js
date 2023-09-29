import React, { useState } from 'react'
import Suggestion from './Suggestion'
import Post from "./posts/Post";
import './Timeline.css'
import { PostAdd } from '@mui/icons-material'
const Timeline = () => {
  const [posts,setPosts] =useState([
   
    {
      user: "guddu_",
      postImage:
        "https://cdn.pixabay.com/photo/2018/12/23/09/47/young-3890799_1280.jpg",
      likes: 54,
      timestamp: "30m",
    },
    {
      user: "tobiii_",
      postImage:
        "https://cdn.pixabay.com/photo/2018/10/20/03/26/young-3760179_1280.jpg",
      likes: 54,
      timestamp: "30m",
    },
    {
      user: "Zoroo_",
      postImage:
        "https://cdn.pixabay.com/photo/2018/10/01/00/46/male-3715098_1280.jpg",
      likes: 54,
      timestamp: "1d",
    },
    {
      user: "Monkey_D_Luffy",
      postImage:
        "https://cdn.pixabay.com/photo/2017/07/08/16/06/one-piece-2484805_1280.jpg",
      likes: 54,
      timestamp: "6h",
    },
    {
      user: "minato._",
      postImage:
        "https://cdn.pixabay.com/photo/2021/03/10/02/18/anime-6083347_1280.jpg",
      likes: 54,
      timestamp: "30m",
    },
    {
      user: "gaara",
      postImage:
        "https://cdn.pixabay.com/photo/2018/10/20/00/26/ninja-3760010_1280.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "itachi_",
      postImage:
        "https://cdn.pixabay.com/photo/2018/10/21/13/01/toy-3762868_1280.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "sasuke",
      postImage:
        "https://cdn.pixabay.com/photo/2022/06/26/14/21/sasuke-uchiha-7285592_1280.jpg",
      likes: 14,
      timestamp: "3d",
    },
    {
      user: "coco",
      postImage:
        "https://cdn.pixabay.com/photo/2019/09/15/11/15/miguel-of-coco-4478001_1280.jpg",
      likes: 14,
      timestamp: "3d",
    },
    {
      user: "naruto_",
      postImage:
        "https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
      likes: 14,
      timestamp: "3d",
    },
  ])
  return (
    <div className='timeline'>
        <div className='timeline__left'>
            <div className='timeline__posts'>
              {posts.map((post)=>(
                <Post
                user = {post.user}
                postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
             ))}
            </div>
    </div>
    <div className='timeline__right'>
    <Suggestion/>
    </div>
    </div>
  )
}

export default Timeline