// transition images //

const image = document.getElementById('image');

const callback = (entradas) => {
    console.log(entradas);
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            console.log("Veo la imagen")
            entrada.target.classList.add('visible')
        }
    });
}

const viewImage = new IntersectionObserver(callback, {
    root:null,
    threshold:1
});

viewImage.observe(image);