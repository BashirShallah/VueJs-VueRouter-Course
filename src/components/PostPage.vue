<template>
    <div>
        Post {{id}}
        <br>
        Qurey Params:<br>
        Q: {{$route.query.q}}<br>
        name: {{$route.query.name}}

    </div>
</template>

<script>
export default {
    props: ["id"]
}
</script>