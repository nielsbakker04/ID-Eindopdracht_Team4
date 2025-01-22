document.querySelectorAll('.taak').forEach(taak => {
    taak.addEventListener('click', () => {
        // Zoek de taak-tekst en de check
        const tekstElement = taak.querySelector('.taak-tekst');
        const vinkElement = taak.querySelector('.check');

        // Toggle de doorgestreepte tekst
        tekstElement.classList.toggle('doorgestreept');

        // Toggle de zichtbaarheid van de vink
        if (tekstElement.classList.contains('doorgestreept')) {
            vinkElement.style.display = 'block';
            taak.classList.add('afgerond'); // Voeg afgerond-klasse toe
        } else {
            vinkElement.style.display = 'none';
            taak.classList.remove('afgerond'); // Verwijder afgerond-klasse
        }
    });
});


// DROPDOWN BUTTON CATALOGUS PAGINA

document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', (event) => {
        // Sluit alle andere open dropdowns
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            if (dropdown !== button.parentElement) {
                dropdown.classList.remove('active');
            }
        });

        // Toggle de huidige dropdown
        button.parentElement.classList.toggle('active');
    });
});

// Sluit dropdowns als je buiten klikt
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});
