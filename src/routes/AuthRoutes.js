import Login from "../pages/authentication/Login";

 const authRoutes = [
    { path: `${process.env.PUBLIC_URL}/login`, Component: <Login/> },
];

 export default authRoutes
