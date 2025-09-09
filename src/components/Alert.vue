<template>
    <div class="alert-wrapper">
        <div v-for="(alert, index) in alerts" :key="index" class="alert-box" @click="remove(index)">
            <p id="msg">{{ alert.message }}</p>
        </div>
    </div>
</template>
<style>
    .alert-wrapper{
        position: fixed;
        right: 10px;
        z-index: 9999;
    }
    .alert-box{
        background-color: rgba(var(--picked-inv), 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(var(--picked-inv),0.3);
        margin: 10px;
        padding: 0 20px;
        border-radius: 100px;
        right: 0;

    }
    .alert-box:hover{
        cursor: pointer;
    }

</style>

<script>
    import { reactive } from 'vue'
    export const alerts = reactive([])
    export function addAlert(message) {
        const alert = { message }
        alerts.push(alert)
        console.log('Alert added:', message)
        setTimeout(() => {
            const index = alerts.indexOf(alert)
            if (index !== -1) {
            alerts.splice(index, 1)
            }
        }, 3000)
    }
    function remove(index) {
        alerts.splice(index, 1)
        console.log('Alert removed at index:', index)
    }
    export default {
        name: 'Alert',
        setup() {
            return { alerts, addAlert, remove }
        }
    }
</script>