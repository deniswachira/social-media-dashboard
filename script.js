document.getElementById('dark-mode-toggle').addEventListener('change', function () {
    if (this.checked) {
        document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
        document.body.style.color = 'hsl(230, 17%, 14%)';
        document.querySelectorAll('.card, .overview-card').forEach(card => {
            card.style.backgroundColor = 'hsl(227, 47%, 96%)';
            card.style.color = 'hsl(230, 17%, 14%)';
        });
    } else {
        document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        document.body.style.color = 'hsl(0, 0%, 100%)';
        document.querySelectorAll('.card, .overview-card').forEach(card => {
            card.style.backgroundColor = 'hsl(228, 28%, 20%)';
            card.style.color = 'hsl(0, 0%, 100%)';
        });
    }
});
