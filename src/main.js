const nicknamE = document.getElementById('nickname');
const pfp = document.getElementById('dpfp');
const themeButton = document.getElementById('themeIcon');
let curTheme;
let nickname;
window.onload = () => {
    curTheme = document.cookie.split('theme=')[1]?.split(';')[0] || 'light';
    document.documentElement.setAttribute('class', curTheme);
    themeButton.setAttribute('data', `./icons/${curTheme}.svg`);

    // const r = new XMLHttpRequest();
    // r.open('GET', 'https://discard.ralsin.ml/704037343878971424.json');
    // r.onload = () => {
    //     const res = JSON.parse(r.response)
    //     document.getElementById('dpfp').setAttribute('src', `https://cdn.discordapp.com/avatars/${res.id}/${res.avatar}?size=1024&quality=lossless`);
    //     nickname = res.username + '#' + res.discriminator;
    //     nicknamE.innerText = nickname;
    // }
    // r.onerror = () => {
    //     document.getElementById('dpfp').setAttribute('src', 'https://cdn.discordapp.com/avatars/1038965193931235418/9db1a9e9b9378c08a3b941661b962b89.webp?size=256');
    //     nickname = 'Coldy#7428';
    //     nicknamE.innerText = nickname;
    // }
    // r.send();
    pfp.setAttribute('src', 'https://cdn.discordapp.com/avatars/1038965193931235418/9db1a9e9b9378c08a3b941661b962b89.webp?size=256');
    nickname = 'Coldy#7428';
    nicknamE.innerText = nickname;
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
