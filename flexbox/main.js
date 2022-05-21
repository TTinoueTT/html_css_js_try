let time = 0;
setTimeout(() => {
  document.getElementById("test").classList.add("scene1");
}, (time += 1000));
setTimeout(() => {
  document.getElementById("test").classList.add("scene2");
}, (time += 1000));

circles = document.getElementsByClassName("circle");
console.log(circles);

circles[1].classList.add();


for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}