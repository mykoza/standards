"use strict";
document.addEventListener('click', (e) => {
    if (e.target instanceof Element) {
        const anchor = e.target.closest('.card');
        if (anchor) {
            console.log(anchor);
        }
    }
});
//# sourceMappingURL=script.js.map