// Your code here
class Polygon {
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        return this.arr.reduce((total, side) => total + side)
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.arr[0] + this.arr[1] > this.arr[2] && this.arr[1] + this.arr[2] > this.arr[0] && this.arr[0] + this.arr[2] > this.arr[1] && this.countSides === 3) {
            return true
        } else {
            return false
        }
    }

}

class Square extends Polygon {
    get area() {
        if (this.isValid) {
            return this.arr[0] * this.arr[1]
        }
    }

    get isValid() {
        if (this.countSides === 4 && this.arr.every((val, i, arr) => val === arr[0])) {
            return true
        } else {
            return false
        }
    }
}