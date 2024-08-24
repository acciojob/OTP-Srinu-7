const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''; // Clear the input before entering the new value
            setTimeout(() => codes[idx + 1]?.focus(), 10); // Move to the next input
        } else if (e.key === 'Backspace') {
            codes[idx].value = ''; // Clear the current input
            setTimeout(() => codes[idx - 1]?.focus(), 10); // Move to the previous input
        }
    });
});
