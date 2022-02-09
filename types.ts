let num1: number = 5;
console.log(num1);

let flag:boolean = false;
console.log(flag);

let color:string = "Hello";
console.log(color);

let list: string[] = ["hi", "hello", "hey"];
for(let i = 0; i < list.length; i++){
    console.log("String: " + list[i]);
}

let notSure:any = 5;
console.log(notSure);

let listAny: any[] = [2, true, "any type of data"];
for(let i = 0; i < list.length; i++){
    console.log("List item "+ i +" : " + listAny[i]);
}