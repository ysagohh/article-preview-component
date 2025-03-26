const shareButton = document.getElementById('share-icon');
const socialLinks = document.getElementById('social-links');

function toggleHidden() {
    socialLinks.classList.toggle('hidden');
}

shareButton.addEventListener('click', toggleHidden);