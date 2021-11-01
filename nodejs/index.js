const RANDOM_NUMBER = Math.floor(Math.random() * 255);
const RANDOM_NUMBER2 = Math.floor(Math.random() * 255);
const RANDOM_NUMBER3 = Math.floor(Math.random() * 255);


function rgbToHex(r,g,b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	const hex = (r + g + b).toString(16);
	if(hex.length < 6) {
		for (let i = 0; i < 6; i++) {
			if(hex.length == 6) {
				break;
			};
			return "#" + hex + (6 - hex.length);
		}	
	};
	return "#" + hex
}


const hexCode = rgbToHex(RANDOM_NUMBER,RANDOM_NUMBER2,RANDOM_NUMBER3);
console.log(`RGB: (r: ${RANDOM_NUMBER}, g: ${RANDOM_NUMBER2}, b: ${RANDOM_NUMBER3})   HEX: ${hexCode}`);