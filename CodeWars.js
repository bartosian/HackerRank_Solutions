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