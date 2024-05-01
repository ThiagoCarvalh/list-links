
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route
} from 'react-router-dom';

import App from './App.jsx';


export default createBrowserRouter(
    createRoutesFromElements(
      <Route path="/login" element={(<h1>TESTE</h1>)} />
    )
  );
  