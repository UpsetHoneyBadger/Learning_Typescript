class Point{
    get x(){
        return this._x
    }
    set x(newValue){
        this._x = newValue
    }

    get y(){
        return this._y
    }
    set y(newValue){
        this._y = newValue
    }

    constructor(private _x: number, private _y: number){
    };
}

const myPoint = new Point(1,2)
console.log("my point has the coordiantes", myPoint.x, "and", myPoint.y) 