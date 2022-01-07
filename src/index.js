module.exports = function toReadable (number) {
    let stringNumber = number.toString();
    let resultWordNumber = '';

    if (number === 0)
        resultWordNumber = 'zero';

    for (let i = 1; i <= stringNumber.length; i++) {

        //let selector = stringNumber.length - i;

        switch (i) {
            case 1:{
                switch (stringNumber.slice(-i)) {
                    case '1':
                        resultWordNumber += 'one';
                        break;
                    case '2':
                        resultWordNumber += 'two';
                        break;
                    case '3':
                        resultWordNumber += 'three';
                        break;
                    case '4':
                        resultWordNumber += 'four';
                        break;
                    case '5':
                        resultWordNumber += 'five';
                        break;
                    case '6':
                        resultWordNumber += 'six';
                        break;
                    case '7':
                        resultWordNumber += 'seven';
                        break;
                    case '8':
                        resultWordNumber += 'eight';
                        break;
                    case '9':
                        resultWordNumber += 'nine';
                        break;
                    default:
                        break;     
                }
                break;
            };
            case 2:{
                switch (stringNumber.slice(-i, -i + 1)) {
                    case '1':
                        switch (resultWordNumber){
                            case '':
                                resultWordNumber = 'ten';
                                break;
                            case 'one':
                                resultWordNumber = 'eleven';
                                break;
                            case 'two':
                                resultWordNumber = 'twelve';
                                break;
                            case 'three':
                                resultWordNumber = 'thirteen';
                                break;
                            case 'four':
                                resultWordNumber = 'fourteen';
                                break;
                            case 'five':
                                resultWordNumber = 'fifteen';
                                break;
                            case 'six':
                                resultWordNumber = 'sixteen';
                                break;
                            case 'seven':
                                resultWordNumber = 'seventeen';
                                break;
                            case 'eight':
                                resultWordNumber = 'eighteen';
                                break;
                            case 'nine':
                                resultWordNumber = 'nineteen';
                                break;
                        };
                        break;
                    case '2':
                        resultWordNumber = 'twenty ' + resultWordNumber;
                        break;
                    case '3':
                        resultWordNumber = 'thirty ' + resultWordNumber;
                        break;
                    case '4':
                        resultWordNumber = 'forty ' + resultWordNumber;
                        break;
                    case '5':
                        resultWordNumber = 'fifty ' + resultWordNumber;
                        break;
                    case '6':
                        resultWordNumber = 'sixty ' + resultWordNumber;
                        break;
                    case '7':
                        resultWordNumber = 'seventy ' + resultWordNumber;
                        break;
                    case '8':
                        resultWordNumber = 'eighty ' + resultWordNumber;
                        break;
                    case '9':
                        resultWordNumber = 'ninety ' + resultWordNumber;
                        break;    
                }
                break;
            };
            case 3:{
                switch (stringNumber.slice(-i, -i + 1)) {
                    case '1':
                        resultWordNumber = 'one' + ' hundred ' + resultWordNumber;
                        break;
                    case '2':
                        resultWordNumber = 'two' + ' hundred ' + resultWordNumber;
                        break;
                    case '3':
                        resultWordNumber = 'three' + ' hundred ' + resultWordNumber;
                        break;
                    case '4':
                        resultWordNumber = 'four' + ' hundred ' + resultWordNumber;
                        break;
                    case '5':
                        resultWordNumber = 'five' + ' hundred ' + resultWordNumber;
                        break;
                    case '6':
                        resultWordNumber = 'six' + ' hundred ' + resultWordNumber;
                        break;
                    case '7':
                        resultWordNumber = 'seven' + ' hundred ' + resultWordNumber;
                        break;
                    case '8':
                        resultWordNumber = 'eight' + ' hundred ' + resultWordNumber;
                        break;
                    case '9':
                        resultWordNumber = 'nine' + ' hundred ' + resultWordNumber;
                        break;
                }
                break;
            };
        }
    }


    return resultWordNumber.trim();
}
