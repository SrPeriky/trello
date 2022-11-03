<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    name: 'BoardCard',
    props:{
        id: String,
        name: String,
    }
}
</script>