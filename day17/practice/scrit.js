document.querySelectorAll('.category, .sidebar-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#f0f0f0';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';
    });
});

// Simple click handler example
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        console.log('Video selected:', card.querySelector('.video-title').textContent);
        // Add actual video playback logic here
    });
});