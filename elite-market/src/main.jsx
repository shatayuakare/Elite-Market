import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Suspense } from 'react'
import Loading from './components/Loading.jsx'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <div className='bg-zinc-100'>
      <App />
    </div>
  </Suspense>
)
