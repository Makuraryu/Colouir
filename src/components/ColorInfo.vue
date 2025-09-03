<template>
    <div id="name">{{ props.name }}</div>
    <div id="color">{{ props.color }}</div>
    <div id="hex">{{ props.hex }}</div>
</template>

<script setup>
    const props = defineProps(['name','color','hex']);

</script>
