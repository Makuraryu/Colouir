<template>
    <div id="infos">
        <Info class="info" :name="props.name" :info="props.color" />
        <Info class="info" name="Hex" :info="props.hex" />
        <Info class="info" name="RGB" :info="rgb" />
        <Info class="info" name="HSL" :info="hsl" />

    </div>


</template>

<style>

</style>

<script setup>
    import Info from '@/components/Info.vue';
    import { computed } from 'vue';
    import { HexToRGB, rgbToHsl, invertLightness, SimpRGB, SimpHSL } from "@/utils/ColorCal.ts";


    const props = defineProps(['name','color','hex']);
    const rgb = computed(() => SimpRGB(HexToRGB(props.hex)));
    const hsl = computed(() => {
        const { r, g, b } = HexToRGB(props.hex);
        const hsl = rgbToHsl(r, g, b);
        return SimpHSL(hsl);
    });

</script>
