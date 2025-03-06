 // Add hover effects
 document.querySelectorAll('.menu-item, .video-card').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-2px)';
        item.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    
    item.addEventListener('mouseout', () => {
        item.style.transform = '';
        item.style.boxShadow = '';
    });
});

// Simple click handler
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Playing video: ' + card.querySelector('.video-title').textContent);
    });
});