/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    var rect = new Object();
    rect.length = a;
    rect.width = b;
    rect.perimeter = 2 * (a + b);
    rect.area = a * b;
    return rect;
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var count = 0;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].x === objects[i].y) {
            count++;
        }
    }
    return count;
}

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(perimArr) {
        this.perimArr = perimArr;
    }

    perimeter() {
        var addPerim = this.perimArr;
        var perim = 0;
        for (var i = 0; i < addPerim.length; i++) {
            perim += addPerim[i];
        }
        return perim;
    }
}