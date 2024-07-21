import React from 'react'
import SendIcon from '@mui/icons-material/Send';

export default function RequestTile({name, email}) {
  return (
    <div class="flex flex-row gap-2 w-full text-[12px] z-50">
        <div
            class="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]"
        >
            <div class="flex gap-2">
                <div class="text-[#baa6f2] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                    <SendIcon />
                </div>
                <div>
                    <p class="text-white">{name || 'test'}</p>
                    <p class="text-gray-500">{email || 'test@gmail.com'}</p>
                </div>
                </div>
            </div>
        </div>
  )
}
