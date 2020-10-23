// let products = [];

// let producto = {
//     nombre: "Coca cola",
//     tamano: "1,5L",
//     precio: 150
// }

// products.push(producto)

// localStorage.setItem('productos', JSON.stringify(products));

// let cuerpo = document.querySelector('#contenido');

// let productos = JSON.parse(localStorage.getItem('productos'));

// let table = "<div class='hola'>";

// if(productos !== null) {
//     console.log(productos);
//     cuerpo.innerHTML = table;
//     productos.forEach(producto => {
        
//         console.log(producto.nombre)
//         // cuerpo.innerHTML = "<tr>";
//         // cuerpo.innerHTML = "<td>";
//         cuerpo.innerHTML += producto.nombre
//         // cuerpo.innerHTML = "</td>";
//         // cuerpo.innerHTML = "</tr>";
//     });
//     // cuerpo.innerHTML = "</table>";
// }

// desde aca

function fede() {
    Swal.fire({
        icon: 'success',
        text: 'Producto guardado!',
        showConfirmButton: false,
        timer: 1700
    })
}

let productos = [];

function guardarProducto(e) {
    e.preventDefault();

    let nombre = document.querySelector('#nombre').value;
    let cantidad = document.querySelector('#cantidad').value;
    let precio = document.querySelector('#precio').value;

    let producto = {
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
    }

    // productos = "[{},{}]"

    let productosExistentes = JSON.parse(localStorage.getItem("productos"));

    // productos = [{},{}]

    if(productosExistentes !== null) {
        productosExistentes.push(producto);
        localStorage.setItem('productos',JSON.stringify(productosExistentes));
        fede();
    } else {
        productos.push(producto);
        // [{}]
        localStorage.setItem('productos',JSON.stringify(productos));
        fede();
    }

}

function eliminarProductos() {
    localStorage.removeItem("productos");
}

function mostrarProductos() {
    let productosExistentes = JSON.parse(localStorage.getItem("productos"));

    let table = document.querySelector('#table');

    productosExistentes.forEach(product => {
        table.insertAdjacentHTML('beforeend', `<tr>
            <td>${product.nombre}</td>
            <td>${product.cantidad}</td>
            <td>${product.precio}</td>
            <td><button class="btn btn-danger">Delete</btn></td>
        </tr>`);
    });
}

mostrarProductos();


// array productos = [
//     {
//         nombre,
//         cantidad,
//         precio,
//         categoria
//     },
//     {
//         nombre,
//         cantidad,
//         precio,
//         vencimiento
//     },
//     {
//         nombre,
//         cantidad,
//         precio,
//         lote
//     },
//     {
//         nombre: "cesar",
//         cantidad,
//         precio
//     }
// ]

// [1, 2, 3, 4]
// [{},{},{},{}, 2, false]
// [nombre, cesar]