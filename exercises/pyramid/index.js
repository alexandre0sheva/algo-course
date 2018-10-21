// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;
    }

    if (level.length === n * 2 - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const add = (n - 1 - row <= level.length && n - 1 + row >= level.length) ? '#' : ' ';
    return pyramid(n, row, level+add);
}

// it's better
function pyramid_old(n) {
    const midpoint = n - 1;
    for (let row = 0; row < n; row++) {
        let level = '';

        for (let col = 0; col < n * 2 - 1; col++) {
            if (midpoint - row <= col && midpoint + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }

        }
        console.log(level);
    }
}

module.exports = pyramid;
