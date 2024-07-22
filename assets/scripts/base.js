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

/** 슬라이더 */

const sliderContainer = document.getElementById('mySlider');
const slidesWrapper = document.createElement('div');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const slideItems = [ 0, 1, 2, 3, 4 ];

let currentSlide = 0;
let beforeSlide = currentSlide - 1;
let afterSlide = currentSlide + 1;
let slideWidth = window.innerWidth;

window.addEventListener('resize', () => slideWidth = window.innerWidth);

sliderContainer.style.position = 'relative';
sliderContainer.style.width = '100vw';
sliderContainer.style.height = '50vh';

slidesWrapper.style.display = 'flex';
slidesWrapper.style.flexFlow = 'row nowrap';
slidesWrapper.style.position = 'absolute';
slidesWrapper.style.insetBlock = 0;
slidesWrapper.style.insetInlineStart = currentSlide * window.innerWidth;
slidesWrapper.style.width = 'max-content';
slidesWrapper.style.height = 'inherit';

sliderContainer.prepend(slidesWrapper);

slideItems.forEach(item => {
    const slideItemElement = document.createElement('div');

    slideItemElement.style.width = '100vw';
    slideItemElement.style.height = '100%';
    slideItemElement.innerHTML = item;

    slidesWrapper.appendChild(slideItemElement);
});

btnPrev.addEventListener('click', () => slideMove('prev'));
btnNext.addEventListener('click', () => slideMove('next'));

function slideMove(direction) {
    if (afterSlide === slideItems.length) { // 두 번째 인덱스에서 버튼이 멋대로 비활성화된다. 수정 필요
        btnNext.setAttribute('disabled', true);
    } else if (beforeSlide === 0) {
        btnPrev.setAttribute('disabled', true)
    } else {
        btnPrev.removeAttribute('disabled');
        btnNext.removeAttribute('disabled');
    }

    switch(direction) {
        case 'prev':
            currentSlide = currentSlide - 1;
            console.log(currentSlide);
        break;

        case 'next':
            currentSlide = currentSlide + 1;
            console.log(currentSlide);
        break;
    }

    beforeSlide = currentSlide - 1;
    afterSlide = currentSlide + 1;

    console.log(currentSlide, beforeSlide, afterSlide);
}