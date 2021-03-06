import React,{ memo } from 'react'
import { renderRoutes } from 'react-router-config'
export default memo( function Friend(props){
  const { route } = props
  return (
    <div>
    { renderRoutes(route.routes) }
    </div>
  )
})