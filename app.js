const cards = document.querySelectorAll('.card1');
function changeBg(){
    cards.style.backgroundColor = "hsl(229, 27%, 27%)";
    cards.style.cursor = "pointer";
//console.log("hello");
}
function sameBg(){
    cards.style.backgroundColor = "var(cardBg)";

    
}

cards.forEach((ele) => {
    ele.addEventListener('mouseover', changeBg);
    ele.addEventListener('mouseout', sameBg);
})
 //cards.addEventListener('mouseover', changeBg);
// cards.addEventListener('mouseout', sameBg);


function darkMode(){
    //console.log("hello")
    // btn.style.backgroundColor = ""
    btn.classList.add('darkmode');
}


const btn = document.querySelector('.label');
btn.addEventListener('click', darkMode);



const checkBox =  document.getElementById('checkbox');

checkBox.addEventListener('change', function dark(){
    //console.log('hiiiiii');
    document.body.classList.toggle('darkTheme');
   

});



