/** 스크립트에서 스타일 지정 */

const squareContainer = document.getElementById('quadSquare');

let createCount = 5

squareContainer.style.display = 'flex';
squareContainer.style.flexFlow = 'row nowrap';
squareContainer.style.gap = '.5rem';

for (let i = 1; i < createCount; i ++) {
    const imgContainer = document.createElement('div');
    const imgObject = document.createElement('img');

    imgContainer.appendChild(imgObject);
    imgObject.src = `https://picsum.photos/200/200?random=${i}`;

    squareContainer.appendChild(imgContainer);
}

/** 그래디언트 만들기 */

const gradientContainer = document.getElementById('gradientContainer');

let createColorChip = 255;

for (let i = 0; i < createColorChip; i ++) {
    const colorChip = document.createElement('div');

    let cancelUnderflow = i < 1 ? 1 : i / 2;
    let cancelOverflow = i >= 255 ? 255 : i + 30;
    let cancelExplode = i >= 255 ? 255 : i * 1.5;

    colorChip.style.height = '.1rem';
    colorChip.style.backgroundColor = `rgb(${ cancelUnderflow } ${ cancelOverflow } ${ cancelExplode })`;

    gradientContainer.appendChild(colorChip);
}

/** DOM 요소 조작, 클래스 부여 */

const classTaker = document.getElementById('classTaker');
const btnToggler = document.getElementById('btnClassToggler');

classTaker.addEventListener('mouseover', () => classTaker.classList.add('on-hover'));
classTaker.addEventListener('mouseout', () => classTaker.classList.remove('on-hover'));

btnToggler.addEventListener('click', (e) => {
    classTaker.classList.toggle('class-on');
    e.preventDefault();
});

/** 입력 양식의 포커스, 유효성 체크 */

const frmRegex = document.getElementById('frmRegex');
const inputID = document.getElementById('txtID');
const inputPW = document.getElementById('txtPW');
const labelIsCorrect = document.getElementById('isCorrectID');

const mailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

inputID.addEventListener('keydown', () => {
    if (mailCheck.test(inputID.value) === false) {
        labelIsCorrect.textContent = '메일 주소가 올바르지 않습니다.'
    } else {
        labelIsCorrect.textContent = '';
    }

    if (inputID.value.length >= 30) {
        inputPW.focus();
    }
});

inputPW.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && inputPW.value.length === 0) {
        inputID.focus();
    }
});

/** setInterval을 이용한 애니메이션 */

const animObject = document.getElementById('imgAnimation');
const animFrames = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

let currentFrame = 0

setInterval(() => {
    animObject.src = './assets/images/' + (animFrames[ currentFrame % animFrames.length ]) + '.png';
    currentFrame = currentFrame + 1;
}, 50);

/** 무한 스크롤 */

const infScrollContainer = document.getElementById('infinityScroll');

const createNewPage = () => {
    const pageContainer = document.createElement('div');

    pageContainer.style.display = 'flex';
    pageContainer.style.flexFlow = 'row wrap';
    pageContainer.style.gap = '10px';
    pageContainer.style.width = '510px';

    for (let i = 0; i < 20; i ++) {
        const newItem = document.createElement('div');

        newItem.style.width = '120px';
        newItem.style.height = Math.floor(Math.random() * 100) + 50 + 'px';
        newItem.innerText = i;

        pageContainer.appendChild(newItem);
    }

    infScrollContainer.appendChild(pageContainer);

    console.log('20개 출력 끝!');
}

window.addEventListener('scroll', (e) => {
    let currentLocation = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let totalHeight = document.body.scrollHeight;

    if ((currentLocation + windowHeight) >= totalHeight) {
        createNewPage();
    }
});