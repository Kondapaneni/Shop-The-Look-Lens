class ObjectProperties {
    constructor(top, left, height, width) {
        this.top = top;
        this.left = left;
        this.height = height;
        this.width = width;
    }
}

function findObjectProperties(matrix) {
    let objectFound = false;
    let objectTop = null;
    let objectLeft = null;
    let objectHeight = 0;
    let objectWidth = 0;

 
    matrix.forEach((row, i) => {
        
        row.forEach((pixel, j) => {
            if (pixel === 'w') { 
                if (!objectFound) {
                    objectFound = true;
                    objectTop = i;
                    objectLeft = j;
                }

                objectHeight++;
                objectWidth = Math.max(objectWidth, j - objectLeft + 1);
            }
        });
    });

    if (objectFound) {
        return new ObjectProperties(objectTop, objectLeft, objectHeight, objectWidth);
    } else {
        return null;
    }
}

const matrix = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
];

const result = findObjectProperties(matrix);
if (result) {
    console.log("Object Properties:");
    console.log("Top:", result.top);
    console.log("Left:", result.left);
    console.log("Height:", result.height);
    console.log("Width:", result.width);
} else {
    console.log("No object found.");
}
