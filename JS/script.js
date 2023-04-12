// Creación de objetos de productos
const producto1 = { nombre: 'Hierro', precio: 10 };
const producto2 = { nombre: 'Cemento', precio: 15 };
const producto3 = { nombre: 'Pintura', precio: 20 };
const producto4 = { nombre: 'Madera', precio: 25 };

// Array de productos
const productos = [producto1, producto2, producto3, producto4];

// Variable para almacenar los productos del carrito
const carrito = [];

// Función para mostrar los productos en la lista de productos
function mostrarProductos() {
  const productosLista = document.getElementById('productos-lista');

  productosLista.innerHTML = '';

  for (const producto of productos) {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    li.addEventListener('click', () => agregarAlCarrito(producto));
    productosLista.appendChild(li);
  }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  const carritoLista = document.getElementById('carrito-lista');
  const totalPagar = document.getElementById('total');
  
  carritoLista.innerHTML = '';
  
  let total = 0;

  for (const producto of carrito) {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    li.addEventListener('click', () => eliminarDelCarrito(producto));
    carritoLista.appendChild(li);
    total += producto.precio;
  }

  totalPagar.textContent = `Total: $${total}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
  const index = carrito.indexOf(producto);
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Inicializar la tienda
mostrarProductos();
