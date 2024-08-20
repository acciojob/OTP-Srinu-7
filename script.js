//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''; // Clear the input
            setTimeout(() => codes[idx + 1]?.focus(), 10); // Move to the next input
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1]?.focus(), 10); // Move to the previous input
        }
    });
});
