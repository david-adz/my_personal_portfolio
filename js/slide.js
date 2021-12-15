// JS Slider Botton functions
const slider_btn = document.getElementById('slider').addEventListener('click', function () {
    document.querySelector('.slide-background').classList.toggle('slide-out');
    setTimeout(() => {
        window.location.href = './index.html';
    }, 800);
    console.log('Hi')
});