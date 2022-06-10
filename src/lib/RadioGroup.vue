<template>
    <div>
        <slot :name="name"/>
    </div>
</template>

<script lang="ts">
export default {
    props:{
        name:String
    }
};
</script>

<style lang="scss">
</style>