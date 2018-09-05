function foo(a:string, b?:string):void{
    console.log(a + (
        b ? 
        " " + b : 
        "")
    )
}

foo("Hello")
foo("Hello", "World")
