// 709. To Lower Case
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    // 65 to 90 Are uppercase letters
    //97 to 122 are lower case letters
    // The difference is 32 between these
    for (let i = 0; i < s.length; i++) {
        let charAsciiCode = s.charCodeAt(i);
        if (charAsciiCode >= 65 && charAsciiCode <= 90) {
            s = s.replace(s[i], String.fromCharCode(32 + charAsciiCode));
        }
    }
    return s;
};