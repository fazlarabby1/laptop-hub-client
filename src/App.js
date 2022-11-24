import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="max-w-[1480px] mx-auto">
      <Toaster />
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
