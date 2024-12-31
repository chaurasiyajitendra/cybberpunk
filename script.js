// Function to handle scroll opacity
function handleScrollOpacity() {
    const firstPage = document.querySelector('.first-page');
    const firstLogo = document.querySelector('.first-logo');
    const firstMenu = document.querySelector('.first-menu ul');
    
    // Check the scroll position
    const scrollY = window.scrollY;

    // Adjust the opacity based on scroll position
    if (scrollY > 0) {
        firstPage.classList.add('scrolled');
        firstLogo.style.opacity = 0.5; // Reduce opacity
        firstMenu.style.opacity = 0.5; // Reduce opacity
    } else {
        firstPage.classList.remove('scrolled');
        firstLogo.style.opacity = 1; // Reset opacity
        firstMenu.style.opacity = 1; // Reset opacity
    }
}

// Function to handle logo and menu visibility
function handleLogoMenuVisibility() {
    const firstLogo = document.querySelector('.first-logo');
    const firstMenu = document.querySelector('.first-menu');
    
    if (window.scrollY > 850) { // Assuming the second page starts after 850px
        firstLogo.style.display = 'none';
        firstMenu.style.display = 'none';
    } else {
        firstLogo.style.display = 'block';
        firstMenu.style.display = 'flex';
    }
}

// Function to handle product info change
function handleProductInfoChange(icon) {
    // Get the parent .moreProduct element
    const moreProduct = icon.closest('.moreProduct');
    
    // Get the new image source and content from the clicked .moreProduct
    const newImageSrc = moreProduct.querySelector('.main-product').src;
    const newOtherInfo = moreProduct.querySelector('.disply-info .other-info p').textContent;
    const newProductInfoTitle = moreProduct.querySelector('.disply-info .product-info h3').textContent;
    const newProductInfoDesc = moreProduct.querySelector('.disply-info .product-info p').textContent;

    // Change the image of the .product class
    const productImage = document.querySelector('.product img');
    const otherInfo = document.querySelector('.other-info p');
    const productInfoTitle = document.querySelector('.product-info h3');
    const productInfoDesc = document.querySelector('.product-info p');

    // Add fade-out class
    productImage.classList.add('fade-out');
    otherInfo.classList.add('fade-out');
    productInfoTitle.classList.add('fade-out');
    productInfoDesc.classList.add('fade-out');

    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Change the image source
        productImage.src = newImageSrc;

        // Change the content of .other-info and .product-info
        otherInfo.textContent = newOtherInfo;
        productInfoTitle.textContent = newProductInfoTitle;
        productInfoDesc.textContent = newProductInfoDesc;

        // Remove fade-out class and add fade-in class
        productImage.classList.remove('fade-out');
        productImage.classList.add('fade-in');
        otherInfo.classList.remove('fade-out');
        otherInfo.classList.add('fade-in');
        productInfoTitle.classList.remove('fade-out');
        productInfoTitle.classList.add('fade-in');
        productInfoDesc.classList.remove('fade-out');
        productInfoDesc.classList.add('fade-in');

        // Remove fade-in class after the animation completes
        setTimeout(() => {
            productImage.classList.remove('fade-in');
            otherInfo.classList.remove('fade-in');
            productInfoTitle.classList.remove('fade-in');
            productInfoDesc.classList.remove('fade-in');
        }, 500);
    }, 500);
}

// Event listeners for scroll events
window.addEventListener('scroll', handleScrollOpacity);
window.addEventListener('scroll', handleLogoMenuVisibility);

// Event listeners for .fa-plus icons
const plusIcons = document.querySelectorAll('.fa-plus');
plusIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        handleProductInfoChange(this);
    });
});
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});
