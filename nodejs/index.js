const RANDOM_NUMBER = Math.floor(Math.random() * 255);
const RANDOM_NUMBER2 = Math.floor(Math.random() * 255);
const RANDOM_NUMBER3 = Math.floor(Math.random() * 255);

function hexCompontent(x) {
	x = x.toString(16);
    return x.length == 1 ? "0" + x : x;
};

function rgbToHex(r,g,b) {
	const hex = "" + (r + g + b).toString(16);
	const hexCode = "#" + hexCompontent(r) + hexCompontent(g) + hexCompontent(b);
    return hexCode;
};


const hexCode = rgbToHex(RANDOM_NUMBER,RANDOM_NUMBER2,RANDOM_NUMBER3);
console.log(`RGB: (r: ${RANDOM_NUMBER}, g: ${RANDOM_NUMBER2}, b: ${RANDOM_NUMBER3})   HEX: ${hexCode}`);