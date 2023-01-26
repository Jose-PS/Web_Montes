const alta = document.getElementById("alta");
const panel = document.getElementById("panel");


const altaForm = () => {
let altabtn=null;
let cancelar=null;
  str = `<form><div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nome" aria-label="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Apelidos" aria-label="Last name">
    </div>
  </div>
  <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Aldea" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Rua" aria-label="Last name">
  </div>
</div>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Numero" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Telefono" aria-label="Last name">
  </div>
</div>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Dni" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Email" aria-label="Last name">
  </div>
</div>
<div class="container-sm"><button type="button" class="btn btn-success" id="altabtn">Aceptar</button>
<button type="reset" class="btn btn-secondary">Limpar Campos</button>
<button type="button" class="btn btn-warning" id="cancelar">Cancelar</button></div>
</form>
`
  panel.innerHTML = str;
  altabtn=document.getElementById('altabtn');
  cancelar=document.getElementById('cancelar');
  cancelar.addEventListener('click', showMain);
  altabtn.addEventListener('click', altacomuneiro);
};

const showMain=()=>{
    panel.innerHTML=`<h1>Paxina principal</h1>`
}

const altacomuneiro=()=>{
    panel.innerHTML=`Alta Comuneiro`
}

alta.addEventListener("click", altaForm);
