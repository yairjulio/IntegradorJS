document.getElementById("resumen").addEventListener("click",calcularTotal)

let costo_total = 0;

function calcularTotal() {
    let precio_curso = parseInt(document.getElementById("precio").textContent);
    let descuento_estudiante = parseInt(document.getElementById("descuento_estudiante").textContent)/100;
    let descuento_junior = parseInt(document.getElementById("descuento_junior").textContent)/100;
    let descuento_trainee = parseInt(document.getElementById("descuento_trainee").textContent)/100;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let categoria = parseInt(document.getElementById('categoria').value);
    
    console.log(cantidad);
    console.log(categoria);

    switch(categoria) {
        case 1:
            costo_total = precio_curso * cantidad * descuento_estudiante;
            break;
        case 2:
            costo_total = precio_curso * cantidad * descuento_trainee;
            break;
        case 3:
            costo_total = precio_curso * cantidad * descuento_junior;
            break;
    }
    
    console.log(costo_total);
    document.getElementById("total_a_pagar").textContent = costo_total;
}