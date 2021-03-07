import React from 'react'
import List from '@/views/listr'
import Fri from '@/views/friend'
import Frichild from '@/components/frichild'
import Min from '@/views/mind'
import { Redirect } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path:'/',
    exact:true,
    render:(h)=> (
      <Redirect to='Fri'/>
    )
  },
  {
    path:'/Fri',
    component:Fri,
    routes: [
      {
        path:'/Fri',
        exact:true,
        render:(h)=>(
          <Redirect to='/Fri/f'/>
        ) ,
      },
      {
        path:'/Fri/f',
        component:Frichild
      }
    ]
  },

  {
    path:'/mind',
    component:Min,
  },
  {
    path:'/lis',
    component:List
  }
]
