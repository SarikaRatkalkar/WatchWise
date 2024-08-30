const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.serAttribute("class", isOpen?"ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(".header__image img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content div",{
    duration: 1000,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__content p",{
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".deals__card",{
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".about__image img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about__card",{
    duration: 1000,
    interval: 500,
    delay: 500,
});
// function toggleSearch() {
//     const searchBar = document.getElementById('search-bar');
//     searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
// }

// function searchProducts() {
//     const input = document.getElementById('search-input').value.toLowerCase();
//     const productItems = document.querySelectorAll('#products li');

//     productItems.forEach(function(item) {
//         const productName = item.textContent.toLowerCase();
//         if (productName.includes(input)) {
//             item.style.display = '';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }
// function toggleAccountModal() {
//     const modal = document.getElementById('account-modal');
//     modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
// }
// function toggleCartModal() {
//     const modal = document.getElementById('cart-modal');
//     modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
// }

// function addToCart(productName, price) {
//     const cartItems = document.getElementById('cart-items');
//     const newItem = document.createElement('li');
//     newItem.textContent = `${productName} - $${price}`;
//     cartItems.appendChild(newItem);

//     // Update total
//     const cartTotal = document.getElementById('cart-total');
//     cartTotal.textContent = (parseFloat(cartTotal.textContent) + parseFloat(price)).toFixed(2);
// }

// function toggleSearch() {
//     const searchBar = document.getElementById('search-bar');
//     searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
// }

// function toggleAccountModal() {
//     const modal = document.getElementById('account-modal');
//     modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
// }

// function toggleCartModal() {
//     const modal = document.getElementById('cart-modal');
//     modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
// }

// function searchProducts() {
//     const input = document.getElementById('search-input').value.toLowerCase();
//     const productItems = document.querySelectorAll('#products li');

//     productItems.forEach(function(item) {
//         const productName = item.textContent.toLowerCase();
//         if (productName.includes(input)) {
//             item.style.display = '';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }

// // Example function to add items to cart
// function addToCart(productName, price) {
//     const cartItems = document.getElementById('cart-items');
//     const newItem = document.createElement('li');
//     newItem.textContent = `${productName} - $${price}`;
//     cartItems.appendChild(newItem);

//     // Update total
//     const cartTotal = document.getElementById('cart-total');
//     cartTotal.textContent = (parseFloat(cartTotal.textContent) + parseFloat(price)).toFixed(2);
// }

// function checkout() {
//     alert('Proceeding to checkout...');
// }
// function toggleSearch() {
//     const searchBar = document.getElementById('search-bar');
//     searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
// }

// function toggleModal(modalId, event) {
//     const modal = document.getElementById(`${modalId}-modal`);
//     const icon = event.target.closest('.icon'); // Get the closest icon element
//     const rect = icon.getBoundingClientRect(); // Get the position of the icon

//     // Position the modal below the icon
//     modal.style.left = `${rect.left}px`;
//     modal.style.top = `${rect.bottom + window.scrollY}px`;
//     modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
// }

// function searchProducts() {
//     const input = document.getElementById('search-input').value.toLowerCase();
//     const productItems = document.querySelectorAll('#products li'); // Make sure to have a #products list

//     productItems.forEach(function(item) {
//         const productName = item.textContent.toLowerCase();
//         item.style.display = productName.includes(input) ? '' : 'none';
//     });
// }

// function checkout() {
//     alert('Proceeding to checkout...');
// }

// function toggleSearch() {
//     const searchBar = document.getElementById('search-bar');
//     searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
// }

// function toggleModal(modalId, event) {
//     const modal = document.getElementById(`${modalId}-modal`);
//     const icon = event.currentTarget; // Get the clicked icon
//     const rect = icon.getBoundingClientRect(); // Get the icon's position

//     // Position the modal below the icon
//     modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
//     modal.style.left = `${rect.left}px`; // Align with the icon horizontally
//     modal.style.top = `${rect.bottom + window.scrollY}px`; // Position below the icon
// }

// // Event listeners for the icons
// document.querySelectorAll('.nav-icons .icon').forEach(icon => {
//     icon.addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent default anchor behavior
//         const iconClass = event.currentTarget.querySelector('i').className;
//         let modalId;

//         if (iconClass.includes('fa-user')) {
//             modalId = 'account';
//         } else if (iconClass.includes('fa-shopping-cart')) {
//             modalId = 'cart';
//         }

//         // Close the modal if it's already open
//         document.querySelectorAll('.modal').forEach(modal => {
//             if (modal.id !== `${modalId}-modal`) {
//                 modal.style.display = 'none';
//             }
//         });

//         toggleModal(modalId, event);
//     });
// });

// function toggleSearch() {
//     const searchBar = document.getElementById('search-bar');
//     searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
// }

// function toggleModal(modalId, event) {
//     const modal = document.getElementById(`${modalId}-modal`);
//     const icon = event.currentTarget; // The icon that was clicked
//     const rect = icon.getBoundingClientRect(); // The position of the icon

//     // Hide all modals first
//     document.querySelectorAll('.modal').forEach(mod => {
//         if (mod.id !== `${modalId}-modal`) {
//             mod.style.display = 'none';
//         }
//     });

//     // Toggle the visibility and position of the selected modal
//     if (modal.style.display === 'none' || !modal.style.display) {
//         modal.style.display = 'block';
//         modal.style.position = 'absolute';
//         modal.style.left = `${rect.left}px`;
//         modal.style.top = `${rect.bottom + window.scrollY}px`;
//     } else {
//         modal.style.display = 'none';
//     }
// }

// // Attach event listeners to icons
// document.querySelectorAll('.nav-icons .icon').forEach(icon => {
//     icon.addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent default anchor behavior

//         const iconClass = event.currentTarget.querySelector('i').classList;
//         if (iconClass.contains('fa-user')) {
//             toggleModal('account', event);
//         } else if (iconClass.contains('fa-shopping-cart')) {
//             toggleModal('cart', event);
//         }
//     });
// });


function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
}

function toggleModal(modalId, event) {
    const modal = document.getElementById(`${modalId}-modal`);
    const icon = event.currentTarget; // The clicked icon
    const rect = icon.getBoundingClientRect(); // The position of the icon

    // Hide all other modals
    document.querySelectorAll('.modal').forEach(mod => {
        if (mod.id !== `${modalId}-modal`) {
            mod.style.display = 'none';
        }
    });

    // Position and toggle the selected modal
    if (modal.style.display === 'none' || !modal.style.display) {
        modal.style.display = 'block';

        // Adjust modal position
        let modalLeft = rect.left;
        let modalTop = rect.bottom + window.scrollY;

        // Ensure modal does not go beyond the viewport
        const modalWidth = modal.offsetWidth;
        const viewportWidth = window.innerWidth;
        if (modalLeft + modalWidth > viewportWidth) {
            modalLeft = viewportWidth - modalWidth - 10; // 10px padding from right edge
        }

        modal.style.left = `${modalLeft}px`;
        modal.style.top = `${modalTop}px`;
    } else {
        modal.style.display = 'none';
    }
}

// Attach event listeners to icons
document.querySelectorAll('.nav-icons .icon').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        const iconClass = event.currentTarget.querySelector('i').classList;
        if (iconClass.contains('fa-user')) {
            toggleModal('account', event);
        } else if (iconClass.contains('fa-shopping-cart')) {
            toggleModal('cart', event);
        }
    });
});