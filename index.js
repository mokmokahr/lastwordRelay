var title = document.querySelector('#text');
if (title instanceof Element) {
    title.innerHTML = "zz";
    console.log(typeof (title));
}
