/* --- script.js BLINDADO --- */

// 1. INVENTARIO GLOBAL (Usamos window para asegurar que se vea desde todos lados)
window.products = [
    { id: 1, name: "Mary", category: "Body", price: 380.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Mary.jpg",  sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"] },
    { id: 2, name: "Clarance", category: "Body", price: 380.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Clarance.jpg",  sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 3, name: "Erly", category: "Body", price: 400.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Erly.jpg",  sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 4, name: "Bonde", category: "Body", price: 350.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Bonde.jpg",  sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 5, name: "Mellon", category: "Body", price: 380.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/mellon.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL" ] },
    { id: 6, name: "Carmen", category: "Body", price: 300.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Carmen.jpg", sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"] },
    { id: 7, name: "Flaw", category: "Body", price: 300.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Flaw.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL" ] },
    { id: 8, name: "Wine", category: "Body", price: 350.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Wine.jpg", sizes: ["XS", "S", "M", "L" , "XL" ] },
    { id: 9, name: "Hilly", category: "Corset", price: 280.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Hilly.jpg", sizes: ["XS", "S", "M", "L" , "XL" ] },
    { id: 10, name: "Persefone", category: "Corset", price: 300.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Persefone.jpg", sizes: ["XS", "S", "M", "L" , "XL" ] },
    { id: 11, name: "Molly", category: "Corset", price: 250.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Molly.jpg", sizes: ["XS", "S", "M", "L" , "XL" ]},
    { id: 12, name: "Baby Black", category: "Set de dos piezas", price: 400.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Baby%20black.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 13, name: "Amallys", category: "Set de dos piezas", price: 380.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Amallys.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL" ] },
    { id: 14, name: "Cot", category: "Set de dos piezas", price: 250.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Cot.jpg", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 15, name: "Vero", category: "Set de dos piezas", price: 350.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Vero.jpg", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 16, name: "Clementine", category: "Set de dos piezas", price: 350.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Clementine.jpg", sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"] },
    { id: 17, name: "Melody", category: "Set de dos piezas", price: 360.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Melody.jpg", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 18, name: "Lili", category: "Set de dos piezas", price: 370.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Lili.jpg", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 19, name: "Moi", category: "Set de dos piezas", price: 350.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Moi.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 20, name: "Baby Blue", category: "Set de dos piezas", price: 400.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Baby%20blue.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 21, name: "Bondy", category: "Set de dos piezas", price: 350.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Bondy.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 22, name: "Antonieta", category: "Set de dos piezas", price: 360.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Antonieta.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 23, name: "Lipa", category: "Set de dos piezas", price: 300.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Lipa.jpg", sizes: ["XS", "S", "M", "L", "XL"] },
    { id: 24, name: "Marina", category: "Set de dos piezas", price: 300.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Marina.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 25, name: "Bill", category: "Set de dos piezas", price: 280.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Bill.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 26, name: "Lelith", category: "Set de dos piezas", price: 400.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Lelith.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 27, name: "Govyna", category: "Set de dos piezas", price: 380.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Govyna.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL"] },
    { id: 28, name: "Jane", category: "Set de dos piezas", price: 380.00, image: "https://raw.githubusercontent.com/reckless-online/reckless/refs/heads/main/images/Jane.jpg", sizes: ["XS", "S", "M", "L", "XL", "2XL" ]},

];

// 2. RECUPERAR DATOS AL INICIO
// Intentamos leer la memoria.
let savedData = localStorage.getItem('recklessCart');
window.cartItems = savedData ? JSON.parse(savedData) : [];

console.log("Sistema iniciado. Items en memoria:", window.cartItems.length);

// 3. FUNCIONES GLOBALES (DEFINITIVAS)

// Función Guardar
window.saveCart = function() {
    localStorage.setItem('recklessCart', JSON.stringify(window.cartItems));
    window.updateCounter();
    console.log("Guardado en LocalStorage. Total items:", window.cartItems.length);
}

// Función Actualizar Contador
window.updateCounter = function() {
    const counter = document.getElementById('cart-count');
    if(counter) {
        counter.innerText = window.cartItems.length;
    }
}

// Función AGREGAR (Para index.html)
window.addToCart = function(id) {
    console.log("Intentando agregar ID:", id);
    const product = window.products.find(p => p.id === id);
    const selectedSize = document.getElementById(`size-${id}`)?.value || "M";
    if(product) {
        window.cartItems.push({
            ...product,
            selectedSize: selectedSize
        });
        window.saveCart(); // Guardar cambios
        
        //alert(`¡${product.name} AGREGADO A LA BOLSA!`);
        
        // Animación visual
        const counter = document.getElementById('cart-count');
        if(counter){
            counter.style.color = "#ff0033";
            setTimeout(() => counter.style.color = "white", 500);
        }
    } else {
        alert("Error: Producto no encontrado");
    }
}

// Función ELIMINAR (Para cart.html)
window.removeItem = function(index) {
    window.cartItems.splice(index, 1);
    window.saveCart();
    window.renderCartPage(); // Refrescar la tabla visualmente
}

// Función FILTRAR (Para index.html)
window.filterProducts = function(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.toggle('active', btn.innerText === category));
    
    const filtered = category === 'All' ? window.products : window.products.filter(p => p.category === category);
    window.renderShop(filtered);
}


// 4. INICIALIZADOR AUTOMÁTICO
document.addEventListener('DOMContentLoaded', () => {
    window.updateCounter();

    // -- SI ESTAMOS EN LA TIENDA (INDEX) --
    const grid = document.getElementById('product-grid');
    if (grid) {
        // Cargar botones de filtro
        const filterContainer = document.getElementById('filter-buttons');
        if(filterContainer) {
            const categories = ['All', ...new Set(window.products.map(p => p.category))];
            filterContainer.innerHTML = categories.map(cat => `
                <button class="filter-btn ${cat === 'All' ? 'active' : ''}" onclick="window.filterProducts('${cat}')">
                    ${cat}
                </button>
            `).join('');
        }
        // Cargar productos
        window.renderShop(window.products);
    }

    // -- SI ESTAMOS EN EL CARRITO (CART) --
    const cartTableBody = document.getElementById('cart-table-body');
    if (cartTableBody) {
        window.renderCartPage();
    }
});


// 5. RENDERIZADORES

window.renderShop = function(list) {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    grid.innerHTML = list.map(item => `
        <article class="product-card">
            <div class="img-box">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="details">
                <span class="prod-cat">${item.category}</span>
                <h4 class="prod-name">${item.name}</h4>
                <div class="size-row">
                    <select id="size-${item.id}" class="size-select">
                        ${item.sizes.map(size => `<option value="${size}">${size}</option>`).join("")}
                    </select>
                </div>
                <div class="price-row">
                    <span class="prod-price">$${item.price}</span>
                </div>
                
                <div class="add-row">
                    <span class="add-text">Añadir al carrito</span>
                    <button class="add-mini" onclick="window.addToCart(${item.id})">+</button>
                </div>
            </div>
        </article>
    `).join('');
}

window.renderCartPage = function() {
    const cartTableBody = document.getElementById('cart-table-body');
    const totalDisplay = document.getElementById('cart-page-total');
    
    if(!cartTableBody) return;

    if(window.cartItems.length === 0) {
        cartTableBody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:40px;">TU BOLSA ESTÁ VACÍA.</td></tr>';
        if(totalDisplay) totalDisplay.innerText = "$0.00";
        return;
    }

    cartTableBody.innerHTML = window.cartItems.map((item, index) => `
        <tr>
            <td>
                <div class="cart-product-info">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <p class="name">${item.name}</p>
                        <p class="cat">${item.category}</p>
                        <p class="size">Talla: ${item.selectedSize}</p>
                    </div>
                </div>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>1</td>
            <td>
                <button class="remove-link" onclick="window.removeItem(${index})">Eliminar</button>
            </td>
        </tr>
    `).join('');

    const total = window.cartItems.reduce((sum, item) => sum + item.price, 0);
    if(totalDisplay) totalDisplay.innerText = "$" + total.toFixed(2);
}

// Menu Toggle (Para celulares)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle){
    menuToggle.addEventListener('click', () => {
        const isHidden = (navLinks.style.display === 'none' || navLinks.style.display === '');
        navLinks.style.display = isHidden ? 'flex' : 'none';
        
        if(isHidden) {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#050505';
            navLinks.style.padding = '20px';
        }
    });
}

/* --- FUNCIÓN PARA ENVIAR PEDIDO A WHATSAPP --- */

window.sendToWhatsApp = function() {
    // 1. Validar que haya productos
    if(window.cartItems.length === 0) {
        alert("Tu bolsa está vacía. Agrega productos primero.");
        return;
    }

    // 2. Obtener datos del formulario
    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const address = document.getElementById('client-address').value;

    // 3. Validar que llenó los datos
    if(name === "" || phone === "" || address === "") {
        alert("Por favor, llena todos los datos de envío.");
        return;
    }

    // 4. Construir el mensaje de los productos
    let message = `*NUEVO PEDIDO WEB - RECKLESS*%0A%0A`;
    message += `*Cliente:* ${name}%0A`;
    message += `*Tel:* ${phone}%0A`;
    message += `*Dirección:* ${address}%0A%0A`;
    message += `*PEDIDO:*%0A`;

    window.cartItems.forEach((item, index) => {
        message += `- ${item.name}  | Talla: ${item.selectedSize} ($${item.price})%0A`;
    });

    // Calcular total
    const total = window.cartItems.reduce((sum, item) => sum + item.price, 0);
    message += `%0A*TOTAL: $${total.toFixed(2)} MXN*`;

    // 5. Crear el Link de WhatsApp
    // CAMBIA ESTE NÚMERO POR EL DE LA DUEÑA (Código país + número)
    // Ejemplo México: 521 + 55 + número
    const phoneNumber = "5215562090727"; 
    
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    // 6. Abrir WhatsApp en nueva pestaña
    window.open(url, '_blank');
}







