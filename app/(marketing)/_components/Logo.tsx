import Image from 'next/image'
import {Poppins} from 'next/font/google'
import {cn} from '@/lib/utils'

import React from 'react'

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
})

const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
        <Image
            src="/logo.svg"
            height={40}
            width={40}
            alt='logo'
            className='dark:hidden'
        />
        <Image
            src="/logo-dark.svg"
            height={40}
            width={40}
            alt='logo'
            className='hidden dark:block'
        />
        <p className={cn("font-semibold pt-1", font.className)}>
          Notion
        </p>
    </div>
  )
}

export default Logo