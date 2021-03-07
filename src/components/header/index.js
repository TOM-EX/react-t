import React, { memo } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Headrclss } from '@/components/header/style'
export default memo(
  function Header() {
    return (
      <Headrclss>
       <NavLink to='/' className='wenz'>发现音乐 </NavLink>
       <Link to='/mind'>我的</Link>
       <Link to='/lis'>我的音乐</Link>
      </Headrclss>
    )
  }
)