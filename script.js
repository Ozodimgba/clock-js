function ShowTime() {
let time = new Date();
let hour = time.getHours;
let minutes = time.getMinutes;
let seconds = time.getSeconds;
am_pm = 'AM';
if (hour > 12) {
  hours -= 12
am_pm = 'PM'
}
if (hour === 0) {
  hours = 12
am_pm = 'AM';
}
hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

let currentTime = hour + ":"
        + min + ":" + sec + am_pm;
}
console.log(ShowTime());
