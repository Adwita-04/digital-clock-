const form=document.querySelector('form');
const input=document.querySelector('input')
const local=document.querySelector('.local-value')
const utc=document.querySelector('.utc-value')
const iso=document.querySelector('.iso-value')
const curr=document.querySelector('.time')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    
    const timeStamp=Number(input.value);
    const currTime=new Date(timeStamp);
    local.innerText=currTime.toLocaleString('en-GB',{dateStyle:'full'});
    utc.innerText=currTime.toUTCString();
    iso.innerText=currTime.toISOString();
})
function update(){
    const time=new Date();
    const timeString = time.toLocaleTimeString('en-GB', { hour12: false});
    curr.innerText = timeString;
}

setInterval(update, 1000);
update(); 
