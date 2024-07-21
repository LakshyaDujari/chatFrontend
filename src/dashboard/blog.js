import React, { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import BlogPost from './blogpost';

export default function Blog() {
    const [blogsCount, setBlogsCount] = useState(34);
    const [friendsCount, setFriendsCount] = useState(100);
    const images=[
        "https://wallpapers.com/images/high/natural-scenery-pictures-736-x-1308-2yckka60jpvm2q4e.webp",
        "https://media.licdn.com/dms/image/D5612AQHuoxuoWWOv9g/article-cover_image-shrink_720_1280/0/1704905815486?e=2147483647&v=beta&t=e0hU1p4m0u0qlvHKi-5tOKBHzaWG_azxJSYT79-cX68",
        "https://media.licdn.com/dms/image/D5612AQHuoxuoWWOv9g/article-cover_image-shrink_720_1280/0/1704905815486?e=2147483647&v=beta&t=e0hU1p4m0u0qlvHKi-5tOKBHzaWG_azxJSYT79-cX68",
        "https://media.licdn.com/dms/image/D5612AQHuoxuoWWOv9g/article-cover_image-shrink_720_1280/0/1704905815486?e=2147483647&v=beta&t=e0hU1p4m0u0qlvHKi-5tOKBHzaWG_azxJSYT79-cX68",
    ]
    const [posts, setPosts] = useState([]);

    return (
        <div className="flex flex-col h-full w-3/5 overflow-y-scroll items-center scroll-smooth">
            {/* top cards for stats */}
            <div className="flex flex-row gap-8 justify-center mt-4">
                <div
                class="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute blur z-10 fill-purple-300 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                    <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                </svg>

                <div class="z-20 flex flex-col justify-center items-center">
                    <span class="font-bold text-6xl ml-2">{friendsCount}</span>
                    <p class="font-bold">Friends</p>
                </div>
                </div>
                <div
                class="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute blur z-10 fill-purple-300 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                    <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                </svg>

                <div class="z-20 flex flex-col justify-center items-center">
                    <span class="font-bold text-6xl ml-2">{blogsCount}</span>
                    <p class="font-bold">Blogs</p>
                </div>
                </div>
                <div
                class="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute blur z-10 fill-purple-300 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                    <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                </svg>

                <div class="z-20 flex flex-col justify-center items-center">
                    <span class="font-bold text-6xl ml-2">{friendsCount}</span>
                    <p class="font-bold">Groups</p>
                </div>
                </div>
            </div>
            {/* blog posting */}
            <div class="bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm mt-5 w-3/4">
                <h1 class="text-center text-slate-200 text-xl font-bold col-span-6">Share Your Thoughts</h1>
                <textarea placeholder="Your Thoughts...." class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"></textarea>
                <button class="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-purple-400 border border-slate-200">
                    <UploadFileIcon/>
                </button>
                <button class="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-purple-400 border border-slate-200">
                    <DeleteIcon/>
                </button>
                <span class="col-span-2"></span>
                <button class="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-purple-400">
                    <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"></path>
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M10.11 13.6501L13.69 10.0601"></path>
                    </svg>
                </button>

            </div>
            {/* blog posts */}
            { posts.map((post) => () => {
                return <BlogPost 
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                    images={post.images}
                />  
            })}
            <BlogPost 
                title="Noteworthy technology acquisitions 2021"
                content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                author="John Doe"
                date="12th July, 2021"
                images= {images}
            />
            <BlogPost 
                title="Noteworthy technology acquisitions 2021"
                content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                author="John Doe"
                date="12th July, 2021"
                images={images}
            />
            <div className='flex h-96'>
                <div className="w-1/2">
                </div>
            </div>
        </div>
    )
}
  