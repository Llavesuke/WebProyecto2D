// Modal functionality for gallery
function createGalleryModal() {
  // Create modal elements
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center hidden bg-horror-black/90 backdrop-blur-sm';
  modal.id = 'gallery-modal';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg';
  
  const modalImage = document.createElement('img');
  modalImage.className = 'w-full h-auto';
  modalImage.id = 'modal-image';
  
  const modalCaption = document.createElement('div');
  modalCaption.className = 'absolute bottom-0 left-0 right-0 p-4 bg-horror-black/70 text-white';
  modalCaption.id = 'modal-caption';
  
  const closeButton = document.createElement('button');
  closeButton.className = 'absolute top-4 right-4 text-white text-2xl hover:text-horror-red transition-colors';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });
  
  // Append elements
  modalContent.appendChild(modalImage);
  modalContent.appendChild(modalCaption);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });
  
  return modal;
}

// Image gallery modal functionality
function setupGallery() {
  const galleryItems = document.querySelectorAll('#gallery .group');
  const modal = createGalleryModal();
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Get the image source and caption
      const img = item.querySelector('img');
      const title = item.querySelector('h3')?.textContent || '';
      const description = item.querySelector('p')?.textContent || '';
      
      // Set modal content - use currentSrc to get the currently loaded image version
      modalImage.src = img.currentSrc || img.src;
      modalImage.alt = img.alt;
      modalCaption.innerHTML = `<h3 class="text-xl font-bold">${title}</h3><p class="text-sm">${description}</p>`;
      
      // Show modal
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupGallery();
});