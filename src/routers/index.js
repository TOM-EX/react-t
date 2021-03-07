
import List from '@/views/listr'
import Fri from '@/views/friend'
import Min from '@/views/mind'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path:'/',
    exact:true,
    component: Fri
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
