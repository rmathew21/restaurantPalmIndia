// document.querySelectorAll('.menuBtns .all').forEach(button => {
//     button.addEventListener('click', () => {
//         const targetId = button.getAttribute('data-target');
//         const targetSection = document.querySelector(targetId);

//         if (targetSection) {
//             targetSection.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".menuBtns button");
//     // const allButton = document.querySelector(".menuBtns .highlight");
//     const menuSections = document.querySelectorAll(".menuSections");

//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             const targetId = button.getAttribute('data-target');

//             if (targetId === '#') { 
//                 // If 'all' button is clicked, show all sections}
//                 menuSections.forEach(section => section.style.display = 'block');
//         } else {
//             // Hide all sections first
//             menuSections.forEach(section => section.style.display = 'none');

//                 // Show only the targeted section
//                 const selectedSection = document.querySelector(targetId);
//                 if (selectedSection) {
//                     selectedSection.style.display = 'block';
//                 }
//             }

//         //Remove highlight class from all buttons and add tot he clicked one
//         buttons.forEach(btn => btn.classList.remove('highlight'));
//         button.classList.add('highlight');
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menuBtns button");
    const menuSections = document.querySelectorAll(".menuSections > div");

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = button.getAttribute('data-target').trim();

            if (targetId === "#") { 
                // If 'All' button is clicked, show all sections
                menuSections.forEach(section => section.style.display = 'block');
            } else {
                // Hide all sections first
                menuSections.forEach(section => section.style.display = 'none');

                // Show only the targeted section
                const selectedSection = document.querySelector(targetId);
                if (selectedSection) {
                    selectedSection.style.display = 'block';
                } else {
                    console.error(`No element found for selector: ${targetId}`);
                }
            }

            // Remove highlight class from all buttons and add to the clicked one
            buttons.forEach(btn => btn.classList.remove('highlight'));
            button.classList.add('highlight');
        });
    });

    // Open/close functionality for each section
    document.querySelectorAll('.openClose').forEach(button => {
        button.addEventListener('click', function () {
            const section = this.closest('div[id]');
            const wrapper = section.querySelector(".inner-wrapper");

            // const innerContainer = section.querySelector('.inner-container');

            if (wrapper.style.maxHeight === '0px' || !wrapper.style.maxHeight) {
                wrapper.style.maxHeight = wrapper.scrollHeight + "px";
                this.textContent = "-"; // Change button text to collapse
            } else {
                wrapper.style.maxHeight = '0px';
                this.textContent = "+";
            }
        });
    });
});
