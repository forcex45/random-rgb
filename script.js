new Vue({
    el: "#app",
    data: {
        hexCode: "",
        rgbCode: ""
    },
    methods: {
        hexCompontent(x) {
            x = x.toString(16);
            return x.length == 1 ? "0" + x : x;
        },

        rgbToHex(r, g, b) {
            const hexCode = "#" + this.hexCompontent(r) + this.hexCompontent(g) + this.hexCompontent(b);

            this.hexCode = hexCode;
            return hexCode;
        },
        randomRGB() {
            const RANDOM_NUMBER = Math.floor(Math.random() * 255);
            const RANDOM_NUMBER2 = Math.floor(Math.random() * 255);
            const RANDOM_NUMBER3 = Math.floor(Math.random() * 255);

            const rgbCode = `rgb(${RANDOM_NUMBER},${RANDOM_NUMBER2},${RANDOM_NUMBER3})`;
             this.rgbToHex(RANDOM_NUMBER, RANDOM_NUMBER2, RANDOM_NUMBER3)
            document.body.style.background = rgbCode;

            this.rgbCode = rgbCode;
        }
    }
})