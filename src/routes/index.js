
// layout
import { HeaderOnly } from '../components/Layout';

// routes config
import routesConfig from '../config/routes';

// pages
import Home from '../pages/Home';
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from '../pages/Search';

// public routes
export const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.search, component: Search, layout: null}
];

// private routes
export const privateRoutes = [

];