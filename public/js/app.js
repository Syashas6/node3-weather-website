const weatherform = document.querySelector('form');
const search = document.querySelector('input');

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    
    document.querySelector('.main-index .loc').innerHTML = "Loading...";
    document.querySelector('.main-index #temp').innerHTML = " ";
    document.querySelector('.main-index #we').innerHTML = " ";
    document.querySelector('.main-index #hu').innerHTML = " ";

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data) =>{
        if(data.error){
            document.querySelector('.main-index .loc').innerHTML = data.error;
        }
        else{
            
            document.querySelector('.main-index .loc').innerHTML = location;
            document.querySelector('.main-index #temp').innerHTML = data.temp;
            document.querySelector('.main-index #we').innerHTML = data.we;
            document.querySelector('.main-index #hu').innerHTML = data.hu;
            
            }
        })
    })
})