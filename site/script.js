new Vue({
	el: "#app",
	data: {
		hex: "",
		rgb: ""
	},
	methods: {
		randomHex() {
		this.rgb = "";
		
		const r = Math.floor(Math.random() * 255).toString(16);
		const g = Math.floor(Math.random() * 255).toString(16);
		const b = Math.floor(Math.random() * 255).toString(16);

		const hex = (r + g + b);
		if(hex.length < 6) {
			for (let i = 0; i < 6; i++) {
				if(hex.length == 6) {
					break;
				};
			const hexCode = "#" + hex + (6 - hex.length);
			document.body.style.background = hexCode;
			this.hex = hexCode
			}	
		};
			const hexCode = "#" + hex;
			document.body.style.background = hexCode;
			this.hex = hexCode;
		},
		randomRGB() {
		this.hex = "";
		const RANDOM_NUMBER = Math.floor(Math.random() * 255);
		const RANDOM_NUMBER2 = Math.floor(Math.random() * 255);
		const RANDOM_NUMBER3 = Math.floor(Math.random() * 255);

		const rgbCode = `rgb(${RANDOM_NUMBER},${RANDOM_NUMBER2},${RANDOM_NUMBER3})`;
		document.body.style.background = rgbCode;

		this.rgb = rgbCode;
		}
	}
})