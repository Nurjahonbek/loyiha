import { Sidebar } from '../components'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Sidebar/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
