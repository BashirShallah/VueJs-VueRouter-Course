import HomePage from './components/HomePage'
import AboutUsPage from './components/AboutUsPage'
import PostPage from './components/PostPage'
import PostsPage from './components/PostsPage'
import UsersPage from './components/UsersPage'
import UsersHomePage from './components/users/UsersHomePage'
import UsersViewPage from './components/users/UsersViewPage'

const routes = [
    {path: "/", component: HomePage, name: "home"},
    {path: "/about", component: AboutUsPage},
    {path: "/posts", component: PostsPage},
    {path: "/posts/:id", component: PostPage, props: true, name: "single-post"},
    {path: "/users", component: UsersPage, children: [
        {path: "", component: UsersHomePage},
        {path: ":id", component: UsersViewPage, props: true}
    ]}
];

export default routes;
