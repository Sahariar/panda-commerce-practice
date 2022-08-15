console.log('Hello Panda Commerece!');
function randomColor() {
    let c = "#";
    for (var i = 0; i < 6; i++) {
        c += (Math.random() * 16 | 0).toString(16);
    } 
    return c;
}

 const  allH2Tags = document.getElementsByTagName('h2');

 for (const allH2Tag of allH2Tags) {
    allH2Tag.style.color = randomColor();
 }

 console.log(allH2Tags);



//  task 3

const backPackSection = document.getElementById('backpack-section');
backPackSection.style.backgroundColor = 'tomato';


const  cardClasss = document.getElementsByClassName('card');
for (const cardClass of cardClasss) {
    cardClass.style.borderRadius = '30px';
 }

 document.getElementById('slide-btn').addEventListener('click' , function clickHandle(){
    console.log('I am clicked');
 });

 const allBuyNowBtns = document.getElementsByClassName('btn-hero-buy');
 console.log(allBuyNowBtns);

 for (const allBuyNowBtn of allBuyNowBtns) {
    allBuyNowBtn.addEventListener('click' , function(event){
        event.target.remove(event.target);
    });
 }

const emailInput= document.getElementById('inputEmail3');
const emailSubmit = document.getElementById('submit-btn');
emailSubmit.style.backgroundColor="#FF136F";
emailSubmit.style.color="#FFF";
console.log(emailSubmit);

emailInput.addEventListener('keyup', function(event){

    const text = event.target.value;
    console.log(text);

    if(text.endsWith('mail.com')){
        emailSubmit.removeAttribute('disabled');
        emailSubmit.addEventListener('click', function(event){
            emailInput.value = '';
        })
    }else{
        // do nothing.
    }

})


const  cardImgs = document.getElementsByClassName('card-img-top');
for (const cardImg of cardImgs) {
    cardImg.addEventListener('mouseenter' , function(event){
        cardImg.src = '../images/bags/bag-3.png';
    })
}


const subscribeSection = document.getElementById('subscribe-section');
subscribeSection.style.padding = '100px 0';
subscribeSection.addEventListener('dblclick', function(event){
    subscribeSection.style.backgroundColor = randomColor();
    
})