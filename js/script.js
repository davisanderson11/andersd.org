document.addEventListener("DOMContentLoaded", function(){
    const navItems = document.querySelectorAll('.nav a');

    navItems.forEach(item=> {
        item.addEventListener('click', function(event){
            event.preventDefault();
            const targetUrl = this.getAttribute('href');

            document.querySelector('.screen').classList.add('fade-out');

            setTimeout(function(){
                window.location.href = targetUrl;
            }, 500);
        });
    });
});