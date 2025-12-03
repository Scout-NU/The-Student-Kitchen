const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add click feedback - scale down on mousedown
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Add hover feedback - scale up when hovering over clickable elements
document.addEventListener('mouseover', (e) => {
    if (e.target.matches('a, button, input, textarea, select, [role="button"], .contact-button, .hero-view-programs-btn, .read-more-btn, .view-programs-btn, .donate-btn, .search-icon-btn, .site-btn, .arrow, details, summary')) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.2)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.matches('a, button, input, textarea, select, [role="button"], .contact-button, .hero-view-programs-btn, .read-more-btn, .view-programs-btn, .donate-btn, .search-icon-btn, .site-btn, .arrow, details, summary')) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }
});