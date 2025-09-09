<template>
    <div class="Infos" @click="copy">
        <div id="name" class="info">{{ name }}</div>
        <div id="info" class="info">{{ info }}</div>
    </div>
</template>
<script setup>
    import { addAlert } from '@/components/Alert.vue' 
    const props = defineProps(['name','info']);
    function copy() {
        navigator.clipboard.writeText(props.info);
        addAlert(`Copied ${props.name} to clipboard!`);
    }

</script>
<style>

    .Infos{
        border: 1px solid rgba(var(--picked-inv),0.3);
        background-color: rgba(var(--picked-inv), 0.1);
        color: rgb(var(--picked-inv));
        position: relative;
        height: 40px;
        padding: 20px;
        border-radius: 20px;
        transition: 0.2s;
        flex: 1 0 auto;
    }
    .info{
        max-width: max-content;
        
    }
    .Infos:hover{
        cursor: pointer;
        border: 1px solid rgba(var(--picked-inv),0.5);
        box-shadow: 0 0 50px 2px rgba(var(--picked-inv), 0.2);
        background-color: rgba(var(--picked-inv), 0.9);
        color: rgb(var(--picked));
        font-weight: 900;

    }

</style>