import { Nav } from "./interfaces";

export const navOptions: Nav[] = [
    {
        text: 'Home',
        path: '/'
    },
    {
        text: 'Foragele',
        path: '/foragele'
    },
    {
        text: 'Blog',
        path: '/blog'
    },
    {
        text: 'Projects',
        path: '/projects'
    },
    {
        text: 'About Me',
        path: '/about'
    },
    {
        text: 'Logout',
        path: '/logout',
        authRequired: true
    },
    {
        text: 'Login',
        path: '/login',
        unauthorizedOnly: true
    }
];