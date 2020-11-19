const toggle = document.getElementById('toggle');
const flexm = document.getElementById('flexm');

toggle.addEventListener('change', (e) => {
    flexm.classList.toggle('show-monthly');

});