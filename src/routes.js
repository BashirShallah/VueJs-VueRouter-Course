import HomePage from './components/HomePage'
import AboutUsPage from './components/AboutUsPage'
import PostPage from './components/PostPage'
import PostsPage from './components/PostsPage'

const routes = [
    {path: "/", component: HomePage},
    {path: "/about", component: AboutUsPage},
    {path: "/posts", component: PostsPage},
    {path: "/posts/:id", component: PostPage, props: true},
];

export default routes;
