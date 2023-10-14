const scrollToButtons = document.querySelectorAll('button[id^="scrollTo"]');
    scrollToButtons.forEach(button => {
        button.addEventListener('click', function() {
            openNewPage('/Medical_IllnessNav_Page/medical_illness.html');
        });
    });
const pageUrl = '/Medical_IllnessNav_Page/medical_illness.html';
    function openNewPage(pageUrl) {
        window.open(pageUrl, '_blank');
    }