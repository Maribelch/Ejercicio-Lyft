//listado de bandera
var listPais= 
    '[{"nombre": "Argentina","img": '+
    '"https://k37.kn3.net/taringa/9/B/B/5/B/4/freddybostero/A98.gif",'+
    '"phone_code": "5"},'+
    
     
    '{"nombre":"Bolivia","img":"http://livrespensadores.net/wp-content/uploads/2012/06/bolivia.gif",'+
    '"phone_code": "591"},'+
    
    '{"nombre": "Brasil" ,"img": "https://images-na.ssl-images-amazon.com/images/I/315%2BZxfybuL.jpg",'+ '"phone_code": "55"},'+
    
    '{"nombre": "Perú","img": "http://cualesel.net/wp-content/uploads/cu%C3%A1l-es-la-bandera-de-per%C3%BA-.png","phone_code": "51"}]';

    //each=una rotacion de jquery
function init(){
    lista();
    var llamandoLi=$("li");
    llamandoLi.each(function (){
            $(this).click(press);
               });
    
}
function lista(){
    var pais=$("#pais");
    for(var i in listPais){
        var html='<li id="' + i + '"><img  class="pas" src="'+pais[i].img+'" alt="">'+pais[i].nombre+'<span class="code" style="display:none;">'+pais[i].phone_code+'</span></li>'
            pais.append(html);
    }
}
//setItem es para guardar y el getItem es para llamar datos curretTareget=al hacer click en cualquier parte que sea asignada de la pagina

function press(event){
    localStorage.setItem("listado",event.currentTarget.id);
}
 
