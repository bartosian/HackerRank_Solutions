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

