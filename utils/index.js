function formatNumber(n) {
	const str = n.toString()
	return str[1] ? str : `0${str}`
}

export function formatTime(date) {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	const t1 = [year, month, day].map(formatNumber).join('-')
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return `${t1} ${t2}`
}
export function regPhone(phone) {
	var reg = /^1[3-9]\d{9}$/;

	return reg.test(phone)
}
/*校验支付密码*/
export function regpayPwd(pwd) {
	var reg = /^\d{6}$/;
	return reg.test(pwd)
}
var toBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var base64Pad = '=';
/*字符串转化base64*/
export function toBase64(data) {
	var result = '';
	var length = data.length;
	var i;
	// Convert every three bytes to 4 ascii characters.                                                 

	for(i = 0; i < (length - 2); i += 3) {
		result += toBase64Table[data.charCodeAt(i) >> 2];
		result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
		result += toBase64Table[((data.charCodeAt(i + 1) & 0x0f) << 2) + (data.charCodeAt(i + 2) >> 6)];
		result += toBase64Table[data.charCodeAt(i + 2) & 0x3f];
	}

	// Convert the remaining 1 or 2 bytes, pad out to 4 characters.                                     

	if(length % 3) {
		i = length - (length % 3);
		result += toBase64Table[data.charCodeAt(i) >> 2];
		if((length % 3) == 2) {
			result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
			result += toBase64Table[(data.charCodeAt(i + 1) & 0x0f) << 2];
			result += base64Pad;
		} else {
			result += toBase64Table[(data.charCodeAt(i) & 0x03) << 4];
			result += base64Pad + base64Pad;
		}
	}
	return result;
}
/** Convert Base64 data to a string */
var toBinaryTable = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
	52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
	15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
	41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
];

export function base64ToString(data) {
	var result = '';
	var leftbits = 0; // number of bits decoded, but yet to be appended  
	var leftdata = 0; // bits decoded, but yet to be appended 
	// Convert one by one.                                                                             
	for(var i = 0; i < data.length; i++) {
		var c = toBinaryTable[data.charCodeAt(i) & 0x7f];
		var padding = (data.charCodeAt(i) == base64Pad.charCodeAt(0));
		// Skip illegal characters and whitespace  
		if(c == -1) continue;
		// Collect data into leftdata, update bitcount  
		leftdata = (leftdata << 6) | c;
		leftbits += 6;
		// If we have 8 or more bits, append 8 bits to the result 
		if(leftbits >= 8) {
			leftbits -= 8;
			// Append if not padding. 
			if(!padding)
				result += String.fromCharCode((leftdata >> leftbits) & 0xff);
			leftdata &= (1 << leftbits) - 1;
		}
	}
	// If there are any bits left, the base64 string was corrupted                                      
	if(leftbits)
		throw Components.Exception('Corrupted base64 string');
	return result;
}
export const basePath='https://www.edu.zkxltech.com/platform-face/'
export const fileUrl='https://www.edu.zkxltech.com/platform-face'
export default {
	formatNumber,
	formatTime,
	regPhone,
	regpayPwd,
	toBase64,
	base64ToString,
	basePath,
	fileUrl
}