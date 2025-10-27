document.addEventListener('DOMContentLoaded', () => {

    
    const tabsContainer = document.getElementById('tabs-container');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabsContainer.addEventListener('click', (event) => {
        const button = event.target.closest('.tab-button');
        if (!button) return; 

        const targetTab = button.getAttribute('data-tab');

       
        tabButtons.forEach(btn => {
            btn.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
            btn.classList.add('text-gray-500', 'hover:text-gray-700');
        });
        
        button.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
        button.classList.remove('text-gray-500', 'hover:text-gray-700');

       
        tabContents.forEach(content => {
            if (content.getAttribute('data-content') === targetTab) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });


    
    const imageGrid = document.getElementById('image-grid');
    const addImageButton = document.getElementById('add-image-button');

    
    const createNewImageTile = () => {
        const newTile = document.createElement('div');
       
        newTile.className = 'h-24 bg-purple-200 rounded-lg flex items-center justify-center text-sm text-gray-600';
        newTile.textContent = `Image ${imageGrid.children.length + 1}`;
        return newTile;
    };

    
    addImageButton.addEventListener('click', () => {
        const newImage = createNewImageTile();
        imageGrid.appendChild(newImage);

       
        addImageButton.classList.add('animate-pulse');
        setTimeout(() => {
            addImageButton.classList.remove('animate-pulse');
        }, 500);
    });

});