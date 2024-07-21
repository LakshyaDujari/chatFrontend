import React from 'react'

export default function FriendRequestTile({name, email}) {
  return (
    <div class="flex flex-row gap-2 w-full text-[12px] z-50">
        <div
            class="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]"
        >
            <div class="flex gap-2 w-full">
                <div class="text-[#baa6f2] bg-white/5 backdrop-blur-xl p-1 rounded-lg w-9">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                    ></path>
                    </svg>
                </div>
                <div className='w-2/3'>
                    <p class="text-white">{name || 'test'}</p>
                    <p class="text-gray-500">{email || 'test@gmail.com'}</p>
                </div>
                <button
                    class="text-red-600 text-gray-600 hover:bg-white/5 p-1 rounded-md transition-colors ease-linear"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
            </div>
        </div>
  )
}
