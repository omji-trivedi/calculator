var screen = document.getElementById('screen');
const btn = document.querySelectorAll('td');
const button = document.querySelector('td');

for(item of btn){
  item.addEventListener('click',(e)=>{
    let btntext = e.target.innerText;
    
    if(btntext == 'X'){
      btntext = '*';
      screen.value += btntext;
    }
    else if(btntext == 'Clear'){
      screen.value = '';
    }
    else if(btntext == '='){
      screen.value = eval(screen.value);
    }
    else{
      screen.value += btntext;
    }
  })
}
