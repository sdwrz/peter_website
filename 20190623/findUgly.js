function isUgly(number) {
    while (number % 2 == 0) {
        number = number / 2;
    }
    while (number % 3 == 0) {
        number = number / 3;
    }
    while (number % 7 == 0) {
        number = number / 7;
    }
    if (number == 1) {
        return true;
    } else {
        return false;
    }
}

function findUgly(N) {
    var count = 0;
    var number = 1;
    while (true) {
        if (isUgly(number)) {
            count++;
        }
        if (count == N) {
            return number;
        } else {
            number++;
        }
    }
}

findUgly(20);