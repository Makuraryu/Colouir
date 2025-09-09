<template>
  <div class="panel">
    <ColorWheel radius="40" @name="onName" @color="onColor" @hex="onHex" class="controls" id="color-wheel"/>
    <ColorInfos :name="colorName" :color="colorEng" :hex="colorHex" class="controls" id="color-info"/>
  </div>
</template>


<style>
  .panel {
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    width: 90vw;
    left: 5vw;
    gap: 50px;
  }
  .controls {
    position: relative;
  }
  #color-wheel{
    flex: 0 0 auto;
  }
  #color-info{
    max-width: fit-content;
    align-content: flex-start;
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  
</style>

<script setup lang="ts">
  import { ref } from 'vue'

  import ColorWheel from '@/components/ColorWheel.vue';
  import ColorInfos from '@/components/ColorInfos.vue';


  const colorName = ref("桜")
  const colorEng = ref("SAKURA")
  const colorHex = ref("#FEDFE1")
  function onName(value: string) {
    colorName.value = value;
  }
  function onColor(value: string) {
    colorEng.value = value;
  }
  function onHex(value: string) {
    colorHex.value = value;
  }
</script>