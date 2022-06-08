const numberWithoutCommas = str => {
    console.log("STR NUMBER WITHOUT COMMAS:", str)
    if (str === undefined){
        const num = 0;
        return num.toFixed(2)
    } else {
        return str.toString().replace(/,/g, '');
    }
}

export default numberWithoutCommas