import { Inter } from 'next/font/google'
import './globals.css'
import Links from '@/Components/Links/Links'
import MobileLinks from '@/Components/MobileLinks/MobileLinks'
import mobileStyle from '../Components/MobileLinks/MobileLinks.module.css'
import { MenuOutlined } from '@ant-design/icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
            <header>
              <nav className='d-Flex align-Center justify-SpaceBetween'>
                <div className="log">Logo</div>
                <Links></Links>
                <MenuOutlined className={mobileStyle.icon}></MenuOutlined>
              </nav>
            </header>
            {children}
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  )
}