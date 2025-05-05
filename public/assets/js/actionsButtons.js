const goStep = () => {
    window.location.href = "view/assinar-step1.html"
}

const download = () => {
    const fileUrl = './public/docs/documento.pdf';
    const fileName = 'documento.pdf';

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}

const goBack = () => {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function () {
    const btnDownload = document.getElementById('btn-download');
    const btnAssinar = document.getElementById('btn-assinar');
    const btnBack = document.querySelector('#back');

    if (btnDownload) {
        btnDownload.addEventListener('click', download);
    }

    if (btnAssinar) {
        btnAssinar.addEventListener('click', goStep);
    }

    if (btnBack) {
        btnBack.addEventListener('click', goBack);
    }
});
