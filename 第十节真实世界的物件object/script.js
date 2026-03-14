// 物件 object

var movie ={
    title:"刻在你心底的名字",
    maker:"氧气电影",
    duration:114,
    actors:[
        {
            name:"陈昊森",
            age:24,
            is_male:true
        },
        {
            name:"曾敬骅",
            age:23,
            is_male:true
        }
    ]
};

document.write(movie.title);
document.write(movie.duration);
document.write(movie.actors[0].name);
document.write(movie.actors[1].age);