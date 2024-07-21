import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Person3Icon from '@mui/icons-material/Person3';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export default function Sidebar() {
    const user = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    return (
        <div class="flex flex-col w-80 h-full bg-slate-50 gap-4 p-4 rounded-2xl">
            <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-purple-200 via-purple-300 to-purple-400 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden shadow-dash">
                <div class="w-28 h-28 background-app-dark mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
                <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                    <span class="text-2xl font-semibold group-hover:text-white transition-all duration-75">{user || 'Guest'}</span>
                    <p className=' group-hover:text-white transition-all duration-75'>{email || 'guest@example.com'}</p>
                </div>
                <a class="background-app-dark px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-[#564592]" href="#">Follow</a>
            </div>
            <div class="flex flex-col gap-2 w-60 sm:w-80 sm:text-s z-50 shadow-lg mt-4">
                <div
                    class="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg background-app-dark px-[10px]"
                >
                    <div class="flex gap-2 justify-center items-center">
                        <div class="text-[#baa6f2] background-app-dark backdrop-blur-xl p-1 rounded-lg">
                            <HomeIcon />
                        </div>
                        <p class="text-white text-xl">Home</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 w-60 sm:w-80 sm:text-s z-50 shadow-lg">
                <div
                    class="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg background-app-dark px-[10px]"
                >
                    <div class="flex gap-2 justify-center items-center">
                        <div class="text-[#baa6f2] background-app-dark backdrop-blur-xl p-1 rounded-lg">
                            <BookmarkIcon />
                        </div>
                        <p class="text-white text-xl">Bookmark</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 w-60 sm:w-80 sm:text-s z-50 shadow-lg">
                <div
                    class="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg background-app-dark px-[10px]"
                >
                    <div class="flex gap-2 justify-center items-center">
                        <div class="text-[#baa6f2] background-app-dark backdrop-blur-xl p-1 rounded-lg">
                            <SettingsIcon />
                        </div>
                        <p class="text-white text-xl">Settings</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 w-60 sm:w-80 sm:text-s z-50 shadow-lg">
                <div
                    class="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg background-app-dark px-[10px]"
                >
                    <div class="flex gap-2 justify-center items-center">
                        <div class="text-[#baa6f2] background-app-dark backdrop-blur-xl p-1 rounded-lg">
                            <Person3Icon />
                        </div>
                        <p class="text-white text-xl">Profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 