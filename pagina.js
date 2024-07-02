const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnhtml = document.querySelector('.html');
const btncss = document.querySelector('.css');
const btnjavascript = document.querySelector('.javascript');
const contenedorproyectos = document.querySelector('.proyectos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    proyectos();
});

document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}


const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = "X";
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //    navegacion.removeChild(navegacion.children[5]);
    //}
    
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            observer.unobserve(imagen);
        }
    });
});



imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
    
}

const proyectos = () =>{
    let proyectosArreglo = [];
    const proyectos = document.querySelectorAll('.proyecto');
    
    proyectos.forEach(proyecto=> proyectosArreglo = [...proyectosArreglo,proyecto]);

    const htmls = proyectosArreglo.filter(html=> html.getAttribute('data-proyecto') === 'html');
    const csss = proyectosArreglo.filter(css=> css.getAttribute('data-proyecto') === 'css');
    const javascripts = proyectosArreglo.filter(javascript=> javascript.getAttribute('data-proyecto') === 'javascript');
    
    mostrarproyectos(htmls, csss, javascripts);


}

const mostrarproyectos = (html, css, javascript) =>{
    btnhtml.addEventListener('click', ()=>{
        limpiarHtml(contenedorproyectos);
        html.forEach(html=> contenedorproyectos.appendChild(html));
    });

    btncss.addEventListener('click', ()=>{
        limpiarHtml(contenedorproyectos);
        css.forEach(css=> contenedorproyectos.appendChild(css));
    });

    btnjavascript.addEventListener('click', ()=>{
        limpiarHtml(contenedorproyectos);
        javascript.forEach(javascript=> contenedorproyectos.appendChild(javascript));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}