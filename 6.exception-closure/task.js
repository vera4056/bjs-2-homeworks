function parseCount(number) {
    const result = Number.parseFloat(number);

    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }

    return result;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(e) {
        return e.message;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ( a + b < c || b + c < a || c + a < b ) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this._perimeter = a + b + c;
        const p = this._perimeter / 2;
        
        this._area = +(Math.sqrt(p * (p - a) * (p - b ) * (p - c)).toFixed(3));
    }
    
    get perimeter() {
        return this._perimeter || "Ошибка! Треугольник не существует";
    }

    get area() {
        return this._area || "Ошибка! Треугольник не существует";
    }

}

function getTriangle(a, b, c) {
    try {
        const tr = new Triangle(a, b, c);        
        return tr;
    } catch(e) {
        return tr;
    }
}