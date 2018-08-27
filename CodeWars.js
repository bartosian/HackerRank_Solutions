function anagramCounter (wordsArray) {
    let counter = 0;
    let sortArr = wordsArray.map((str) => {
        return str.split("").sort().join("");
    });


    for(let i = 0; i < sortArr.length; i++) {
        for(let j = i +1; j < sortArr.length; j++) {
            if(sortArr[i] === sortArr[j]) {
                counter++;
            }
        }


    }

    return counter;
}

function searchSubstr( fullText, searchText, allowOverlap ){
    let count = 0;
    let inProcess = true;
    let match;
    if(!searchText) return count;

    if(!allowOverlap) {
        while(inProcess) {
            if(!count) {
                match = fullText.indexOf(searchText);
            } else {
                match = fullText.indexOf(searchText, match + searchText.length);
            }

            if(match !== -1) {
                count++;
            } else {
                inProcess = !inProcess;
                return count;
            }
        }
    }

    while(inProcess) {
        if(!count) {
            match = fullText.indexOf(searchText);
        } else {
            match = fullText.indexOf(searchText, match + 1);
        }

        if(match !== -1) {
            count++;
        } else {
            inProcess = !inProcess;
            return count;
        }
    }

}

function validParentheses(parens){
    var parentheses = "()",
        stack = [],
        i, character, bracePosition;

    for(i = 0; character = parens[i]; i++) {
        bracePosition = parentheses.indexOf(character);

        if(bracePosition === -1) {
            continue;
        }

        if(bracePosition % 2 === 0) {
            stack.push(bracePosition + 1); // push next expected brace position
        } else {
            if(stack.length === 0 || stack.pop() !== bracePosition) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// TODO

Array.prototype.square = function() {
    return this.map(i => i * i);
}

Array.prototype.cube = function() {
    return this.map(i => Math.pow(i, 3));
}

Array.prototype.average = function() {
    return this.length === 0 ? NaN : this.reduce((sum,i) => sum+=i, 0) / this.length;
}

Array.prototype.sum = function() {
    return this.reduce((sum,i) => sum+=i);
}

Array.prototype.even = function() {
    return this.filter(i=>i%2===0);
}

Array.prototype.odd = function() {
    return this.filter(i=>i%2 !== 0);
}

function findOdd(A) {
    let map = {};

    for(let i of A) {
        let prop = i + '';

        if(!map[prop]) {
            map[prop] = 1;

        } else {
            map[prop] += 1;
        }
    }



    for(let a in map) {
        if(map[a] % 2 !== 0) {
            return Number(a);
        }

    }
}

function toCamelCase(str) {
    let stringArr = (str.indexOf('-') !== -1) ? str.split('-') : str.split('_');
    let resString = '';
    let firstWord = stringArr[0];

    for(let i = 1; i < stringArr.length; i++) {

        let wordsArr = stringArr[i].split('');
        let firstLetter = wordsArr[0].toUpperCase();
        let wordOther = wordsArr.slice(1);
        stringArr[i] = firstLetter + wordOther.join('');
    }

    return stringArr.join('');

}

function parseInt(string) {
    let numArr = string.split(' ');

    let resultArr = [];
    const numMap = {
        'zero':0,
        'one':1,
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9,
        'ten':10,
        'eleven':11,
        'twelve':12,
        'thirteen':13,
        'fourteen':14,
        'fifteen':15,
        'sixteen':16,
        'seventeen':17,
        'eighteen':18,
        'nineteen':19
    };

    const numMap2 = {
        'ten':10,
        'twenty':20,
        'thirty':30,
        'forty':40,
        'fifty':50,
        'sixty':60,
        'seventy':70,
        'eighty':80,
        'ninety':90
    };

    if(numArr.indexOf('million') !== -1) {
        return 1000000;
    }

    if(numArr.indexOf('thousand') !== -1) {
        let numArrClone = numArr.slice(0, numArr.indexOf('thousand'));
        numArr.splice(0, numArr.indexOf('thousand') + 1);

        if(numArrClone.indexOf('hundred') !== -1) {

            let hundrThousNum = numArrClone[0];
            numArrClone.splice(0, 2);

            for(let key in numMap) {
                if(key === hundrThousNum) {
                    resultArr.push(numMap[key] + '00000');
                }
            }


        }


        if(numArrClone.length && numArrClone[0].indexOf('-') !== -1) {
            numArrClone = numArrClone[0].split('-');
            let decThousNum = numArrClone[0];
            numArrClone.splice(0, 1);
            for(let key in numMap2) {
                if(key === decThousNum) {
                    resultArr.push(numMap2[key] + '000');
                }

            }
            let unitThousNum = numArrClone[0];
            numArrClone.splice(0, 1);
            for(let key in numMap) {
                if(key === unitThousNum) {
                    resultArr.push(numMap[key] + '000');
                }
            }

        }

        if(numArrClone.length && numArrClone[0].indexOf('ty') !== -1) {

            let num = numArrClone[0];
            numArrClone.splice(0, 1);
            for(let key in numMap2) {
                if(key === num) {
                    resultArr.push(numMap2[key] + '000');
                }
            }
        }


        let unitThousNum = numArrClone[0];
        numArrClone.splice(0, 1);
        for(let key in numMap) {
            if(key === unitThousNum) {
                resultArr.push(numMap[key] + '000');
            }

        }
    }

    if(numArr.indexOf('hundred') !== -1) {

        let hundrNum = numArr[0];
        numArr.splice(0, 2);

        for(let key in numMap) {
            if(key === hundrNum) {
                resultArr.push(numMap[key] + '00');
            }
        }


    }


    if(numArr.indexOf('and') !== -1) {
        numArr.splice(0, 1);

    }

    if(numArr.length && numArr[0].indexOf('-') !== -1) {

        let newArr = numArr[0].split('-');
        let decNum = newArr[0];//разряд десятков тысяч
        newArr.splice(0, 1);
        for(let key in numMap2) {
            if(key === decNum) {
                resultArr.push(numMap2[key]);
            }

        }
        let unitNum = newArr[0];//разряд единиц тысяч
        newArr.splice(0, 1);
        for(let key in numMap) {
            if(key === unitNum) {
                resultArr.push(numMap[key]);
            }
        }

    }


    if(numArr.length  && numArr[0].indexOf('ty') !== -1) {

        let num = numArr[0];
        numArr.splice(0, 1);
        for(let key in numMap2) {
            if(key === num) {
                resultArr.push(numMap2[key]);
            }
        }
    }




    let unitNum = numArr[0];
    numArr.splice(0, 1);
    for(let key in numMap) {
        if(key === unitNum) {
            resultArr.push(numMap[key]);
        }

    }

    let finalResult = 0;
    for(let i = 0; i < resultArr.length; i++) {
        finalResult += +resultArr[i];
    }

    return finalResult;


}