


function solution(direction: string, radius: number, X: number[], Y: number[]): number {
    let count = 0;
    for (let i = 0; i < X.length; i++) {
        const x = X[i];
        const y = Y[i];
        let isHighlighted = false;
        switch (direction) {
            case 'U':
                if (y > 0 && y <= radius && Math.abs(x) <= y && Math.sqrt(x*x + y*y)<= radius) {
                    isHighlighted = true;
                }
                break;
            case 'D':
                if (y < 0 && Math.abs(y) <= radius && Math.abs(x) <= Math.sqrt((radius * radius)/2)) {
                    isHighlighted = true;
                }
                break;
            case 'L':
                if (x < 0 && Math.abs(x) <= radius && Math.abs(y) <= Math.sqrt(radius * radius - x * x)) {
                    isHighlighted = true;
                }
                break;
            case 'R':
                if (x > 0 && x <= radius && Math.abs(y) <= Math.sqrt(radius * radius - x * x)) {
                    isHighlighted = true;
                }
                break;
        }
        if (isHighlighted) {
            count++;
        }
    }
    console.log(count)
    return count;
}

solution('U', 5, [-1, -2, 4, 1, 3, 0], [5, 4, 3, 3, 1, -1]) ;
