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

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menuBtns button");
    const allButton = document.querySelector(".menuBtns .highlight");
    const menuSections = document.querySelectorAll(".menuSections");

    buttons.forEach(button => {
        button.addEventListener('click', function () {

            const targetId = button.getAttribute('data-target');

            if (targetId === '#appetizers') { // If 'all' button is clicked}
                menuSections.forEach(section => section.style.display = 'block');
        } else {
            menuSections.forEach(section => {
                if (section.querySelector(targetId)) {
                    section.style.display = 'block'
                } else {
                    section.style.display = 'none';
                }
            });
        }

        //Remove highlight class from all buttons and add tot he clicked one
        buttons.forEach(btn => btn.classList.remove('highlight'));
        button.classList.add('highlight');
    });
});
});