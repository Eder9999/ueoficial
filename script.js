const cadastro =document.getElementById('cadastro')
const seclog= document.querySelector('.formulario')
const seccad= document.querySelector('.formcad')
const campos=document.querySelectorAll('input.required')
const camposcad=document.querySelectorAll('input.requiredcad')
const labels= document.querySelectorAll('label.label')
const res=document.querySelectorAll('div.res')
const rescad=document.querySelectorAll('div.rescad')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nomeRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
const mainlog =document.getElementById('lgcnt')


function validarFormulariolog(event){
  event.preventDefault();
  emailvalidate()
  senhavalidate()
}

function validarFormulario(event) {
  event.preventDefault(); // Impede o envio do formulário
  namevalidate()
  lastnamevalidate() 
  emailcadvalidate()
  senhacadvalidate()
  }
function agir(){
 
    cadastro.style.display='none'   
}
function showCadastro(){
  mainlog.style.display='none'
   cadastro.style.display='block'
}
function showLogin(){
   cadastro.style.display='none'
    mainlog.style.display='block'
}
function seterror(index){
   labels[index].style.border='2px solid  #ff1f1f'
   res[index].style.display='block'
   
}
function removeerror(index){
    labels[index].style.border=''
    res[index].style.display='none'
}
function emailvalidate(){
    if(!emailRegex.test(campos[0].value)){
      seterror(0)
    }else{
       removeerror(0)
    }
}

function senhavalidate(){
  if(campos[1].value.length==""){
    seterror(1)
  }else{
     removeerror(1)
  }
}

function seterrorcad(index){
 camposcad[index].style.border='2px solid red'
  rescad[index].style.display='block'
}
function removeerrorcad(index){
 camposcad[index].style.border=''
  rescad[index].style.display='none'
}
function namevalidate(){
  if(camposcad[0].value.length < 3 ||camposcad[0].length > 11 ||!/^[a-zA-Z]+$/.test(camposcad[0].value)){
    seterrorcad(0)
  }else{
    removeerrorcad(0)
  }
}
function lastnamevalidate(){
  if(camposcad[1].value.length < 4 || camposcad[1].value.length > 15|| !/^[a-zA-Z]+$/.test(camposcad[1].value)){
    seterrorcad(1)
  }else{
    removeerrorcad(1)
  }
}

function emailcadvalidate(){
  if(!emailRegex.test(camposcad[2].value)){
    seterrorcad(2)
  }else{
     removeerrorcad(2)
  }
}
function senhacadvalidate(){
  if(camposcad[3].value.length<8){
    seterrorcad(3)
  }else{
     removeerrorcad(3)
  }
}
