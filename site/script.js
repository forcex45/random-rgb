new Vue({
    el: "#app",
    data: {
        hex: "",
        rgb: ""
    },
    methods: {
        rgbToHex(r, g, b) {
            const hex = (r + g + b);

            if (hex.length < 6) {
                for (let i = 0; i < 6; i++) {
                    if (hex.length == 6) {
                        break;
                    };
                    const hexCode = "#" + hex + (6 - hex.length);
                    this.hex = hexCode
                    return hexCode;
                }
            };
            const hexCode = "#" + hex;
            this.hex = hexCode;
            return hexCode;
        },
        randomRGB() {
            const RANDOM_NUMBER = Math.floor(Math.random() * 255);
            const RANDOM_NUMBER2 = Math.floor(Math.random() * 255);
            const RANDOM_NUMBER3 = Math.floor(Math.random() * 255);

            const rgbCode = `rgb(${RANDOM_NUMBER},${RANDOM_NUMBER2},${RANDOM_NUMBER3})`;
            this.rgbToHex(RANDOM_NUMBER, RANDOM_NUMBER2, RANDOM_NUMBER3)

            document.body.style.background = rgbCode;
            this.rgb = rgbCode;
        }
    }
})