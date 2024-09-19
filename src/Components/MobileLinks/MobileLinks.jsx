import React from 'react'
import Link from 'next/link'
import style from './MobileLinks.module.css'

export default function MobileLinks() {
    const links = [
        {
            path:'/',
            name:'Home'
        },
        {
            path:'/about',
            name:'About'
        },
        {
            path:'/contact',
            name:'Contact'
        },
        {
            path:'/admin',
            name:'Admin'
        },
        {
            path:'/blog',
            name:'Blog'
        },
    ]
  return (
    <ul className={style['nav-mobile-links-container']}>
        {links.map(link=>
        <li key={link.name}>
            <Link  href={link.path}>{link.name}</Link>
        </li>)}
    </ul>
  )
}
