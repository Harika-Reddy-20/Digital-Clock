function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var AM = document.getElementById("clock5");
    var date = new Date();
    var time = "";
    var x = "AM";
    if(date.getHours() > 12){
        x = "PM";
    }
    time = date.getHours() % 12; 
    min = date.getMinutes();
    sec = date.getSeconds();
    hours.innerHTML = time;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    AM.innerHTML = x;
}
setInterval(clock,1000);


function edit(){
    let date = new Date();
    var hours = date.getHours();
    let wakeuptime1 = document.querySelector("#set-time");
    wakeuptime1.addEventListener('click',() =>{
        document.getElementById("img-container").style.backgroundImage = "url('https://www.regina.uk.com/wp-content/uploads/2020/04/Lets-have-a-family-dinner-Regina-Paper-for-People-720x400-1.jpg')";
        document.getElementById("msg").innerHTML = "Lets have Breakfast";
    });
    let lunchtime = document.querySelector("#set-time");
    lunchtime.addEventListener('click',() =>{
        document.getElementById("img-container").style.backgroundImage = "url('https://pureella.com/wp-content/uploads/lifeologia-lets-have-lunch-fresh-simple-food.jpg')";
        document.getElementById("msg").innerHTML = "Let's Have Some Lunch";
    });
    let naptime = document.querySelector("#set-time");
    naptime.addEventListener('click',() =>{
        document.getElementById("img-container").style.backgroundImage = "url('https://www.regina.uk.com/wp-content/uploads/2020/04/Lets-have-a-family-dinner-Regina-Paper-for-People-720x400-1.jpg')";
        document.getElementById("msg").innerHTML = " Let's Have Some Breakfast";
    });

}