import Home from "../pages/Home"
import Following from "../pages/Following"
import Profile from "../pages/Profile"

// public routes
export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
];

// private routes
export const privateRoutes = [

];