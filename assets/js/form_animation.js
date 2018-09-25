const textFields = document.querySelectorAll('input[type="text"]');

textFields.forEach(field => {
    // handle field on blur
    field.addEventListener('blur', () => {
        if(field.value.trim().length) {
            field.classList.add('blurred');
        } else {
            field.classList.remove('blurred');
        }
    });
})