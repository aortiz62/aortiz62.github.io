document.addEventListener('DOMContentLoaded', () => {
    
    const leftSide = document.getElementById('leftSide');
    const rightSide = document.getElementById('rightSide');
    const overlay = document.getElementById('choiceOverlay');
    const buttons = document.querySelectorAll('.btn');

    
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            
            overlay.classList.add('hidden');

            const chosenSide = event.target.getAttribute('data-side');

            if (chosenSide === 'left') {
                leftSide.classList.add('enlarged');
                rightSide.classList.add('shrunk');
            } else if (chosenSide === 'right') {
                rightSide.classList.add('enlarged');
                leftSide.classList.add('shrunk');
            }
        });
    });
});
