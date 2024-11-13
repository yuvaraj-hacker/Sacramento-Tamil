
import { Toaster } from 'react-hot-toast';
 
import Approuter from './router/Approuter'

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


  return (
    <>
        <div>
          <Approuter/>
          <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  )
}

export default App
