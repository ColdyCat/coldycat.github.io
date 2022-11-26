const nicknamE = document.getElementById('nickname');
const pfp = document.getElementById('dpfp');
const themeButton = document.getElementById('themeIcon');
let curTheme;
let nickname;
window.onload = () => {
    curTheme = document.cookie.split('theme=')[1]?.split(';')[0] || 'light';
    document.documentElement.setAttribute('class', curTheme);
    themeButton.setAttribute('data', `./icons/${curTheme}.svg`);

    const r = new XMLHttpRequest();
    r.open('GET', 'https://discard.coldycat.repl.co/1038965193931235418.json');
    r.onload = () => {
        const res = JSON.parse(r.response)
        document.getElementById('dpfp').setAttribute('src', `https://cdn.discordapp.com/avatars/${res.id}/${res.avatar}.webp?size=256`);
        nickname = res.username + '#' + res.discriminator;
        nicknamE.innerText = nickname;
    }
    r.onerror = () => {
        document.getElementById('dpfp').setAttribute('src', 'https://cdn.discordapp.com/avatars/1038965193931235418/f5fd6fc05b48d096be0d886f03379ee8.webp?size=256');
        nickname = 'Coldy#7428';
        nicknamE.innerText = nickname;
    }
    r.send();
    return
}
function switchTheme(){
    curTheme = curTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('class', curTheme);
    themeButton.setAttribute('data', `./icons/${curTheme}.svg`);
    const expiry = new Date();
    expiry.setTime(2147483647000);
    document.cookie = `theme=${curTheme}; expires=${expiry.toUTCString()}; path=/; SameSite=Strict`;
}
function href(name) {
    return location.href = name;
}
function copy() {
    setTimeout(() => nicknamE.innerText = nickname, 2e3);
    navigator.clipboard.writeText(nickname);
    return nicknamE.innerText = 'Copied!';
}
