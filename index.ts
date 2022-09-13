let title = document.querySelector('#text');

if(title instanceof Object){
    title.innerHTML = "zz";
    console.log(typeof(title));
}