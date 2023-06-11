const themeToggleBtns = document.querySelectorAll('#theme-toggle');

//  State : we store in local storage if light-mode , following is NULL if 'theme' not present
const theme = localStorage.getItem('theme');

// now we need to set up code , which check upon reloading of website if this key-value pair is present in local cache

// ON MOUNT : happen when we first visit a page / reload a page
theme && document.body.classList.add('light-mode');

//  Handlers
const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
    }
    else {
        localStorage.removeItem('theme', 'light-mode');
        // when we make page dark mode from light mode , BODY is left with class='' , it has no direct consequence , but it would be better to remove attribute of class as no class exist , so 
        document.body.removeAttribute('class');
    }
};
// Events
themeToggleBtns.forEach(btn => { btn.addEventListener('click', handleThemeToggle) });