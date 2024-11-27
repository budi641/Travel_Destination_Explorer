document.addEventListener('DOMContentLoaded', () => {
    // Lightbox Modal for Gallery Images
    const galleryImages = document.querySelectorAll('.card img');
    galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal', 'fade');
            modal.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-secondary text-light">
                        <div class="modal-header">
                            <h5 class="modal-title">${img.alt}</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <img src="${img.src}" class="img-fluid rounded mb-3" alt="${img.alt}">
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            const bsModal = new bootstrap.Modal(modal);
            bsModal.show();

            modal.addEventListener('hidden.bs.modal', () => {
                modal.remove();
            });
        });
    });

    // Dynamic Filtering (Optional)
    const filters = {
        culture: ['Guadalajara'],
        coastal: ['San Juan'],
        historical: ['Warsaw']
    };

    const filterButtons = document.createElement('div');
    filterButtons.classList.add('d-flex', 'justify-content-center', 'mb-4');
    Object.keys(filters).forEach((key) => {
        const button = document.createElement('button');
        button.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        button.classList.add('btn', 'btn-outline-light', 'mx-2');
        button.addEventListener('click', () => {
            document.querySelectorAll('.card').forEach((card) => {
                const title = card.querySelector('.card-text').textContent;
                if (filters[key].some((item) => title.includes(item))) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        filterButtons.appendChild(button);
    });

    const mainContainer = document.querySelector('main .container');
    mainContainer.insertBefore(filterButtons, mainContainer.firstChild);

    const faqItems = document.querySelectorAll('.col-md-6');
    faqItems.forEach(item => {
        const question = item.querySelector('h2');
        const answer = item.querySelector('p');
        
        // Initially hide answers
        answer.style.display = 'none';
        
        question.addEventListener('click', () => {
            // Toggle visibility of the answer when the question is clicked
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});
