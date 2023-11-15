import './style.css';

const btnGit = document.querySelector('.git');


function redirectToGitHub() {
    const githubURL = 'https://github.com/szymon-kowal';
    window.location.href = githubURL;
}

btnGit.addEventListener('click', redirectToGitHub);