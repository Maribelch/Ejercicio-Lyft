//listado de bandera
function init()
{
    var list = document.getElementById("list");
    var listPais= '[{"nombre": "Argentina","img": '+
    '"https://k37.kn3.net/taringa/9/B/B/5/B/4/freddybostero/A98.gif",'+
    '"phone_code": "5"},'+
    
    '{"nombre":"Bolivia","img":"http://livrespensadores.net/wp-content/uploads/2012/06/bolivia.gif",'+
    '"phone_code": "591"},'+
    
    '{"nombre": "Brasil" ,"img": "https://images-na.ssl-images-amazon.com/images/I/315%2BZxfybuL.jpg",'+ '"phone_code": "55"},'+
    
    '{"nombre": "Perú","img": "http://cualesel.net/wp-content/uploads/cu%C3%A1l-es-la-bandera-de-per%C3%BA-.png","phone_code": "51"}]';
    
    var pais=JSON.parse(listPais);
    //console.log(pais[2].nombre);
    
    for(var i=0;i<pais.length;i++)
        {
            var html='<a href="index2.html"><li><img  class="pas" src="'+pais[i].img+'" alt="">'+pais[i].nombre+'<span class="code" style="display:none;">'+pais[i].phone_code+'</span></li></a>'
            list.innerHTML+=html;
        }
    
    var lista= document.getElementsByTagName("li");
    for(var i=0; i<lista.length;i++){
        lista[i].addEventListener("click",onClick);
    }

}
function onClick(evt){
    var imagenPais= evt.currentTarget.getElementsByClassName("pas")[0].src;
    
    var codePais = evt.currentTarget.getElementsByClassName("code")[0].textContent;
    
    localStorage.setItem("srcImg",imagenPais);
    localStorage.setItem("codeText",codePais);
    console.log(imagenPais);
    console.log(codePais);
    //alert("ff");
}

                
 
