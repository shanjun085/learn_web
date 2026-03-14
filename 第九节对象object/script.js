// 物件 object
// key  value
//  键    值


var person ={
    name:"小白",
    age:23,
    is_male:true,
    print_name:function(){
        document.write(this.name);
    }
};

document.write(person);
document.write(person.name);
document.write(person.age);
document.write(person.is_male);  
person.print_name();


