<template>
    <div class="Infos" @click="copy">
        <div id="name" class="info">{{ name }}</div>
        <div id="info" class="info">{{ info }}</div>
    </div>
</template>
<script setup>

    const props = defineProps(['name','info']);
    function copy() {
        navigator.clipboard.writeText(props.info);
    }

</script>
<style>

    .Infos{
        border: 1px solid rgba(var(--picked-inv),0.3);
        background-color: rgba(var(--picked-inv), 0.1);
        position: relative;
        height: 40px;
        padding: 20px;
        border-radius: 20px;
        transition: 0.2s;
        flex: 0 0 auto;
    }
    .info{
        max-width: max-content;
        
    }
    .Infos:hover{
        cursor: pointer;
        border: 1px solid rgba(var(--picked-inv),0.5);
        box-shadow: 0 0 50px 2px rgba(var(--picked-inv), 0.2);

    }

</style>