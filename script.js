// Gallery rotation functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    if (galleryImages.length > 0) {
        let currentImage = 0;
        
        // Show first image
        if (galleryImages[0]) {
            galleryImages[0].classList.add('active');
        }
        
        // Rotate images every 3 seconds
        setInterval(function() {
            if (galleryImages.length > 1) {
                galleryImages[currentImage].classList.remove('active');
                currentImage = (currentImage + 1) % galleryImages.length;
                galleryImages[currentImage].classList.add('active');
            }
        }, 3000);
    }
    
    // Tumblr link is already set in HTML, but ensure it opens in new tab
    const tumblrLink = document.getElementById('tumblr');
    if (tumblrLink && tumblrLink.tagName === 'A') {
        tumblrLink.setAttribute('target', '_blank');
        tumblrLink.setAttribute('rel', 'noopener noreferrer');
    }
});

