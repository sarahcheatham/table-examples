const numberWithCommas = x => {
    console.log("NUMBER WITH COMMAS:", x)
    let num;
    if(x === undefined){
        num = 0;
    } else {
        num = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    console.log("NUM:", num)
    return Number(num).toFixed(2)
};

export default numberWithCommas;