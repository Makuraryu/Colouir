<template>

    <div id="infos">

        <Info class="info" :name="props.name" :info="props.color" />
        <Info class="info" name="Hex" :info="props.hex" />
        <Info class="info" name="RGB" :info="rgb" />
        <Info class="info" name="HSL" :info="hsl" />
        <Info class="info" name="OKLab" :info="oklab" />
        <Info class="info" name="OKLCH" :info="oklch" />
        <Info class="info" name="CMYK" :info="cmyk" />
        <select v-model="selectedData">
            <option v-for="data in givenData" :key="data" :value="data">Palette: {{ data }}</option>
        </select>
    </div>
</template>
<style>

select {
    appearance: none;
    flex: 0 1 80%;
    background-color: rgba(var(--picked-inv),0.1);
    border: 1px solid rgba(var(--picked-inv),0.3);
    color: rgb(var(--picked-inv));;
    font-family: "Noto Serif JP", serif;
    font-weight: 700;
    font-size: larger;
    padding: 10px 20px;
    height: 50px;
    border-radius: 20px;
    transition: 0.2s;
}
select:hover{
    cursor: pointer;
    border: 1px solid rgba(var(--picked-inv),0.5);
    box-shadow: 0 0 50px 2px rgba(var(--picked-inv), 0.2);
    background-color: rgba(var(--picked-inv), 0.9);
    color: rgb(var(--picked));
    letter-spacing: 2px;
}
</style>


<script setup>
    import Info from '@/components/Info.vue';
    import { computed,watch,ref } from 'vue';
    import Cookies from 'js-cookie';
    import { HexToRGB, rgbToHsl, invertLightness, SimpRGB, SimpHSL, triadicColors, hexToOklab, hexToOklch, simpOKLab, simpOKLCH, hexToCmyk, simpCMYK } from "@/utils/ColorCal.ts";
    const givenData = ['Nippon-Color', 'Catppuccin-Frappé', 'Chinese-Color']
    const selectedData = ref(givenData[0])
    watch(selectedData , (newVal) => {
        Cookies.set('selectedColor', newVal);
    })

    const props = defineProps(['name','color','hex']);
    const rgb = computed(() => SimpRGB(HexToRGB(props.hex)));
    const hsl = computed(() => {
        const { r, g, b } = HexToRGB(props.hex);
        const hsl = rgbToHsl(r, g, b);
        return SimpHSL(hsl);
    });
    const oklab = computed(() => simpOKLab(hexToOklab(props.hex)));
    const oklch = computed(() => simpOKLCH(hexToOklch(props.hex)));
    const cmyk = computed(() => simpCMYK(hexToCmyk(props.hex)));
</script>
