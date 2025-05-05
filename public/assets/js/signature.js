const btnWrite = document.getElementById('write');
const btnDraw = document.getElementById('draw');
const signatureWrite = document.getElementById('signature-write');
const signatureDraw = document.getElementById('signature-draw');
const inputSignature = signatureWrite.querySelector('input');
const containerWrite = signatureWrite.querySelector('.container-write');
const styleButtons = signatureWrite.querySelectorAll('.choose-style button');
const canvas = signatureDraw.querySelector('canvas');
const ctx = canvas.getContext('2d');
const btnClear = document.querySelector("#btn-clear");

btnWrite.addEventListener('click', () => {
    btnWrite.classList.add('active');
    btnDraw.classList.remove('active');
    signatureWrite.style.display = 'flex';
    signatureDraw.style.display = 'none';
});

btnDraw.addEventListener('click', () => {
    btnDraw.classList.add('active');
    btnWrite.classList.remove('active');
    signatureDraw.style.display = 'flex';
    signatureWrite.style.display = 'none';
});

btnClear.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

inputSignature.addEventListener('input', () => {
    containerWrite.textContent = inputSignature.value;
});

styleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        styleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        switch (index) {
            case 0:
                containerWrite.style.fontFamily = 'Cursive, sans-serif';
                break;
            case 1:
                containerWrite.style.fontFamily = 'Monospace, sans-serif';
                break;
            case 2:
                containerWrite.style.fontFamily = 'Fantasy, sans-serif';
                break;
        }
    });
});

let drawing = false;

canvas.width = 400;
canvas.height = 200;
ctx.strokeStyle = "#000";
ctx.lineWidth = 2;

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

canvas.addEventListener('mouseleave', () => {
    drawing = false;
});
