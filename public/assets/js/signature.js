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

btnClear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

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

function resizeCanvas() {
    if (window.innerWidth <= 500) {
        canvas.width = 300;
        canvas.height = 150;
    } else {
        canvas.width = 400;
        canvas.height = 200;
    }
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Funções para desenhar
function startDrawing(x, y) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function draw(x, y) {
    if (!drawing) return;
    ctx.lineTo(x, y);
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
}

// Eventos mouse
canvas.addEventListener('mousedown', (e) => {
    startDrawing(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    draw(e.offsetX, e.offsetY);
});

canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

// Eventos touch (mobile)
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    startDrawing(x, y);
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    draw(x, y);
});

canvas.addEventListener('touchend', stopDrawing);
