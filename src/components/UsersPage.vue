<template>
    <div>
        <h1>Users</h1>
        <ul>
            <li><router-link to="/users/1">User 1</router-link></li>
            <li><router-link to="/users/2">User 2</router-link></li>
        </ul>

        <router-view></router-view>

    </div>
</template>
