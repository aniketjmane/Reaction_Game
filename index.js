
const but1 = document.getElementById('start-btn');

const randomNumGenerator = (start, end) => {
    const number = start + Math.floor(Math.random() * (end - start));
    return number;
}

const getDiff = (startTime, endTime) =>{
    let ans = (endTime - startTime) / 1000 + " s";
    return ans;
}

let startTime, currTime;

const showShape = () => {


    if(startTime != undefined) {
        currTime = new Date();
        const timeTaken = document.getElementById('time-taken');
        timeTaken.innerHTML = getDiff(startTime, currTime);
        startTime = currTime;
    } else {
        startTime = new Date();
    }


    const main = document.getElementById('main');
    const parentWidth = main.offsetWidth;
    const parentHeight = main.offsetHeight;

    const shape = document.getElementById('shape');

    const length = `${randomNumGenerator(50, parentHeight * 0.2)}px`;  // we want in px
    shape.style.height = length;
    shape.style.width = length;

    shape.style.borderRadius = `${randomNumGenerator(0, 50)}%`;

    var left = randomNumGenerator(0, parentWidth * 0.9);
    var top = randomNumGenerator(0, parentHeight * 0.8);

    shape.style.left = left + "px";
    shape.style.top = top + "px";

    const color = `rgb(${randomNumGenerator(0, 255)}, ${randomNumGenerator(0, 255)}, ${randomNumGenerator(0, 255)})`;
    shape.style.backgroundColor = color;

    shape.style.display = 'block';

    const but1 = document.getElementById('start-btn');
    but1.disabled = true;
}

but1.addEventListener ('click', showShape);

const shape = document.getElementById('shape');
shape.addEventListener('click', showShape);

const btn2 = document.getElementById('reset-btn');

btn2.addEventListener ('click', () => {
    shape.style.display = 'none';
    but1.disabled = false;
    startTime = undefined;
    const timeTaken = document.getElementById('time-taken');
    timeTaken.innerHTML = "";
    const bestTime = document.getElementById('best-time');
    bestTime.innerHTML = "";
})