import React from 'react'
import Main from './Main'
import SideMenu from './SideMenu'

const Layout = () => {
  return (
    <div className='pt-[16px] flex w-full'>
        <SideMenu/>
        <Main/>
    </div>
  )
}

export default Layout