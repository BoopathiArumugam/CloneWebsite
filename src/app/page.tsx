'use client'
import "./globals.css"
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const Body = dynamic(() => import('./Body/Body'), { ssr: false })

export default function Home() {
  
  return (<>
    <main  >
    <Body/>
    </main>
    </>
  );
}
