<template>
    <div class="color-wheel">
        <div id="wheel" :style="{'--size': radius + 'vh'}"></div>
    </div>

</template>
<style>
    #wheel {
        position: relative;
        width: calc(2 * var(--size));
        height: calc(2 * var(--size));
        border-radius: 50%;
        border: 1px solid rgba(var(--picked-inv),0.3);
        background-color: rgba(var(--picked-inv), 0.1);
        margin: 20px;
        transition: 0.3s;
    }
    .point {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid rgba(var(--picked-inv), 0.8);
        cursor: pointer;
        transform: translate(-50%, -50%);
        transition: 0.5s;
    }

    .point:hover {
        z-index: 999;
        box-shadow: 0 0 8px rgba(var(--picked-inv), 0.8);
        border: 1px solid rgba(var(--picked-inv), 0.3);

    }

</style>
<script setup>
    import {HexToRGB, rgbToHsl, invertLightness, SimpRGB} from "@/utils/ColorCal.ts";
    const props = defineProps(['radius']);
    const emit = defineEmits(['name','color','hex']);

    function placeColorPoint(hex, centerX, centerY, radius, name, engName) {
        const {r, g, b} = HexToRGB(hex);

        const {h, s} = rgbToHsl(r, g, b);

        const angle = h * (Math.PI / 180);
        const rScaled = s * radius;
        const x = centerX + rScaled * Math.cos(angle);
        const y = centerY + rScaled * Math.sin(angle);

        const point = document.createElement("div");
        point.className = "point";
        point.style.left = `${x}px`;
        point.style.top = `${y}px`;
        point.style.background = hex;
        point.id = name;

        point.addEventListener("click", () => {

            document.documentElement.style.setProperty('--picked', SimpRGB(HexToRGB(hex)));
            document.documentElement.style.setProperty('--picked-inv', SimpRGB(HexToRGB(invertLightness(hex))));
            emit('name', name);
            emit('color', engName);
            emit('hex', hex);
        });

        document.getElementById("wheel").appendChild(point);
    }


    function vhToPx(vh) {
        return window.innerHeight * (vh / 100);
    }

    fetch('/colors.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(c => {
        placeColorPoint(c.hex, vhToPx(props.radius), vhToPx(props.radius), vhToPx(props.radius), c.name, c.color);
        });
    })
    .catch(err => console.error(err));

</script>
