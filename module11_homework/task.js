const repeatWord = (word, count) => {
    count = +count
    if (isNaN(count)) {
        return NaN
    }
    let string = ''
    for (let i=0; i<count; i++) {
        string += `${word}${i+1}`+' '
    }
    return string.slice(0, -1);
}
module.exports = { repeatWord };