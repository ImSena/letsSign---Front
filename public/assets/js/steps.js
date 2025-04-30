document.addEventListener("DOMContentLoaded", function () {
    let step = 1;

    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const nextBtn = document.getElementById('next');
    const backBtn = document.getElementById('back');
    const modalElement = document.getElementById('exampleModalCenter');
    const progressbar = document.querySelector(".progress .progress-bar");
    const desc = document.querySelector("#desc");

    step2.style.display = 'none';

    
    const actionNextButton = () =>{
        if (step === 1) {
            progressbar.style.width = "66%";
            step1.style.display = 'none';
            step2.style.display = 'block';
            
            document.querySelector("#desc").style.display = "none";
            
        } else if (step === 2) {
            progressbar.style.width = "100%";
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        }
        
        if(step < 2){
            step++;
        }
    }
    actionNextButton();

    nextBtn.addEventListener('click', actionNextButton);

    backBtn.addEventListener('click', function () {
        if (step === 2) {
            step2.style.display = 'none';
            step1.style.display = 'block';
            progressbar.style.width = "33%";
            document.querySelector("#desc").style.display = "block";
        }

        if(step > 1){
            step--;
        }
    });

    modalElement.addEventListener('hidden.bs.modal', function () {
        progressbar.style.width = "66%";
    });
});
