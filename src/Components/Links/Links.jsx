'use client'
import React from 'react'
import Link from 'next/link'
import style from './Links.module.css'
import { usePathname } from 'next/navigation'

export default function Links() {
    const path = usePathname()
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
    <ul className={style['nav-links-container']}>
        {links.map(link=>
        <li key={link.name}>
            <Link className={`${path==link.path?style.active:''}`} href={link.path}>{link.name}</Link>
        </li>)}
    </ul>
  )
}
