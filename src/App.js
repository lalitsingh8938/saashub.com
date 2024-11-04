
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Services from './components/Services';
// import Category from './components/Category';
// import Experts from './components/Experts';
// import Verticals from './components/Verticals';
// import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/Login';
// import OTPAuthentication from './components/OTP_authentication'; // Change to PascalCase
// import Tools from './components/Tools';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><Navbar /><Header /><Services /><Experts /><Verticals /><Footer /></>
//     },
//     {
//       path: "/Register",
//       element: <><Navbar /><Header /><Register /><Footer /></>
//     },
//     {
//       path: "/OTP_authentication",
//       element: <><OTPAuthentication/></> // Use the corrected component name
//     },
//     {
//       path: "/Login",
//       element: <><Navbar /><Header /><Login /><Footer /></>
//     },
//     {
//       path: "/Category",
//       element: <><Navbar /><Header /><Category /><Tools /><Footer /></>
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;




import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Experts from './components/Experts';
import Tools from './components/Tools';
import Compare from './components/Compare';
import Verticals from './components/Verticals';
import Category from './components/Category'
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import OTPAuthentication from './components/OTP_authentication'; // Change to PascalCase
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Header /><Services /><Experts /><Compare /><Tools /><Verticals /><Footer /></>} />
        <Route path="/Register" element={<><Navbar /><Header /><Register /><Footer /></>} />
        <Route path="/OTP_authentication" element={<OTPAuthentication />} />
        <Route path="/Login" element={<><Navbar /><Header /><Login /><Footer /></>} />
        <Route path="/Category" element={<><Navbar /><Header /><Category /><Tools /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;



