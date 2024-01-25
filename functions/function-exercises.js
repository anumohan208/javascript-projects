function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '*';
    }
    return line;
}

function makeSquare(size) {
    let square = '';

    for (let i = 0; i < size; i++) {
        square += makeLine(size);
        if (i < size - 1) {
            square += '\n';
        }

    }

    return square;
}

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs.slice(0, -1);
}

function makeSpaceLine(numSpaces, numChars) {

    const spacesBefore = ' '.repeat(numSpaces);
    const hashes = '*'.repeat(numChars);
    const spacesAfter = ' '.repeat(numSpaces);

    const line = spacesBefore + hashes + spacesAfter;

    return line;
}

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}

function makeDiamond(height) {
    let upperTriangle = '';
    for (let i = 0; i < height; i++) {
        upperTriangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    let lowerTriangle= reverse(upperTriangle.slice(0,-1));
    let diamond= upperTriangle+lowerTriangle;
    return diamond;
}
console.log(makeLine(5));
console.log(makeSquare(8));
console.log(makeRectangle(3, 4));
console.log(makeDownwardStairs(5));
console.log(makeSpaceLine(3, 5));
console.log(makeIsoscelesTriangle(5));
console.log(makeDiamond(5));