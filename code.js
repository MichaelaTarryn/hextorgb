const r=document.getElementById('r');
const g=document.getElementById('g');
const b=document.getElementById('b');
const rgbcode=document.getElementById('value');
const preview=document.getElementById('preview');



function slice(hexcode,start,end){
    return hexcode.slice(start,end);
}

const btnConvert= document.getElementById('convert');
btnConvert.addEventListener('click',()=>{
    let hexcode=document.getElementById('hex').value;

    let redcode=slice(hexcode,0,2);
    let  greencode=slice(hexcode,2,4);
    let bluecode = slice(hexcode,4,6);

    r.innerHTML=parseInt(redcode,16);
    g.innerHTML=parseInt(greencode,16);
    b.innerHTML=parseInt(bluecode,16);
    rgbcode.innerHTML='rgb('+parseInt(redcode,16)+','+parseInt(greencode,16)+','+parseInt(bluecode,16)+')';
    let previewColor='rgb('+parseInt(redcode,16)+','+parseInt(greencode,16)+','+parseInt(bluecode,16)+')';

    preview.style =`background-color: ${previewColor}`;

})


const btnClear= document.getElementById('clear');
btnClear.addEventListener('click',()=>{
   
    const inputs = document.querySelector('#hex');
    inputs.value = '';
  
  document.querySelector('#r').innerHTML = "";
  document.querySelector('#g').innerHTML = "";
  document.querySelector('#b').innerHTML = "";
  document.querySelector('#value').innerHTML = "";
  preview.style = `background-color: #FFFFFF`
})



