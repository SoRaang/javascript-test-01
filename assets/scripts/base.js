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

/** 기본 이벤트 리스너의 제거 (폼 submit 등) */