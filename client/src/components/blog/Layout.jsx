import React from 'react'
import Header from '../temps/Header'
import Footer from '../temps/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}
