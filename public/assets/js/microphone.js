document.addEventListener('DOMContentLoaded', function () {
    const micButton = document.querySelector('.microphone');
    const voiceElements = document.querySelectorAll('.title, .voice, .microphone');
    const validationMessage = document.getElementById('validationMessage');

    if (micButton) {
        micButton.addEventListener('click', function() {
            voiceElements.forEach(element => {
                element.style.display = 'none';
            });

            validationMessage.style.display = 'block';
        });
    }
});
