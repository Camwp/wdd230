const banner = document.getElementById('banner');
const closeBtn = document.getElementById('closeBtn');

// Check if it's Monday, Tuesday, or Wednesday
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    banner.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});
        