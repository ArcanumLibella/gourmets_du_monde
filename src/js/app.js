window.addEventListener("DOMContentLoaded", (event) => {
    let lastPosition = 0,
        currentPosition = 0;

    const headerSelector = document.querySelector(`.header`);

    window.addEventListener('scroll', (event) => {
        currentPosition = window.scrollY;

        /*
         * Scroll up
         */
        if (lastPosition > window.scrollY) {
            console.log('up')
            // headerSelector.classList.remove(`header__scroll`);

            /*
             * Scroll down
             */
        } else {
            console.log('down')
            headerSelector.classList.add(`header__scroll`);
        }
        lastPosition = currentPosition;
    });
});
