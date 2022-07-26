import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'



const Sidebar = () => {
    const {isSidebarOpen,closeSidebar} = useGlobalContext();//passing the state value and close function

  return <aside className={`${
      isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'
      }`}>
      <div className="sidebar-header">
          <img src={logo} alt="codding-addict" />
          <button className='close-btn'
          onClick={closeSidebar}>
              <FaTimes/>
          </button>
      </div>

      <ul className='links'>
              {links.map((link)=>{
                  const{id,url,icon,text} =link;
                  return (
                      <li key={id}>
                          <a href={url}>
                              {icon}
                              {text}
                          </a>
                      </li>
                  )
              })}
          </ul>

          <ul className='social-icons'>
              {social.map((socialicons)=>{
                  const{id,url,icon} = socialicons;
                  return(
                      <li key={id}>
                          <a href={url}>
                              {icon}
                          </a>
                      </li>
                  )
              })}
          </ul>


  </aside>
}

export default Sidebar