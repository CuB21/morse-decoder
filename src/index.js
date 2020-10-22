const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arLength = expr.match(/.{1,10}/g);
    let newArr = arLength.map((element) => {
        let firstIndex = element.indexOf('1');
        return element.substring(firstIndex, element.length)
    });
    let array = newArr.map((element) => {
        if (element === "**********") {
            return " ";
        } else {
            let newPr = element.match(/.{1,2}/g);
            let morze = newPr.map((newElement) => {
                if (newElement === '10') {
                    return '.'

                } else {
                    return '-';
                }
            });
            return morze.join('');
        }
    });
    let rezMoez = array.map((newElement) => {
        if (newElement === " ") {
            return " "
        } else {
            return MORSE_TABLE[newElement]
        }
    });
    return rezMoez.join("");
}

module.exports = {
    decode
}