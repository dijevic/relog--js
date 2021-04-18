const actualizaHora = () => {

    let fecha = new Date(),
        hora = fecha.getHours(),
        ampm,
        minuto = fecha.getMinutes(),
        segundo = fecha.getSeconds(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        diaSemana = fecha.getDay(),
        year = fecha.getFullYear();
        


    let pHoras = document.getElementById('horas'),
        pSegundos = document.getElementById('segundos'),
        pMinutos = document.getElementById('minutos'),
        pAmPm = document.getElementById('ampm'),
        pYear = document.getElementById('year'),
        pmes = document.getElementById('mes'),
        pDia = document.getElementById('dia'),
        pDiaSemana = document.getElementById('diaSemana');
       
 //// obtengo el arreglo de meses y dias y los insero en mi parrafo////

    let semana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    let  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    pDiaSemana.innerText = semana[diaSemana];
    pDia.innerText = dia;
    pmes.innerText = meses[mes];
    pYear.innerText = year;
    


 ///hora//
 
  pHoras.innerText = hora;
  


  ///cambiamos de 24  a 12 horas //


  if(hora >= 12){
      hora = hora - 12;
      pAmPm.innerText = 'PM'
      
  }else{
    pAmPm.innerText = 'AM'
  }

  if(hora == 0){
      hora = 12
  }

  if(segundo < 10){
    segundo = '0' + segundo
}

if(minuto < 10 ){
   minuto = '0' + minuto
}
  pSegundos.innerText = segundo;
  pMinutos.innerText = minuto;



console.log(ampm)








        
        


}
setInterval(() => {
    actualizaHora()
    
}, 1000);
