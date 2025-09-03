<template>
  <div class="panel">
    <ColorWheel radius="40" @name="onName" @color="onColor" @hex="onHex" class="controls" id="color-wheel"/>
    <ColorInfo :name="colorName" :color="colorEng" :hex="colorHex" class="controls" id="color-info"/>
  </div>
</template>


<style>
  .panel {
    display: flex;
    position: relative;
    width: 90vw;
    left: 5vw;
    gap: 50px;
  }
  .controls {
    flex: 0;
  }
  
  
</style>

<script setup lang="ts">
  import { ref } from 'vue'
  import ColorWheel from '@/components/ColorWheel.vue';
  import ColorInfo from '@/components/ColorInfo.vue';
  const colorName = ref("Color Name")
  const colorEng = ref("Color English")
  const colorHex = ref("Color Hex")
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