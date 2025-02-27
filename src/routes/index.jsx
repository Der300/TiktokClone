
import Home from '../pages/Home'
import Following from "../pages/Following"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"
import Search from '../pages/Search'
import { HeaderOnly } from '../components/Layout'

// public routes
export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/Upload', component: Upload, layout: HeaderOnly},
    {path: '/Search', component: Search, layout: null}
];

// private routes
export const privateRoutes = [

];