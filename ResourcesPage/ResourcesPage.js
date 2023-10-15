
    window.addEventListener('DOMContentLoaded', function () {
        const numBorder = document.querySelectorAll('.borderline');
        if (numBorder.length > 0) {
            const lastBorderline = numBorder[numBorder.length - 1];
            lastBorderline.parentNode.removeChild(lastBorderline);
        }
    });

    