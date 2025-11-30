/* --- script.js BLINDADO --- */

// 1. INVENTARIO GLOBAL (Usamos window para asegurar que se vea desde todos lados)
window.products = [
    { id: 1, name: "Harness Chest Black", category: "Harness", price: 450.00, image: "https://ready-to-rave.com/wp-content/uploads/2023/12/R2R-15-scaled-600x800.jpg",  sizes: ["CH", "M", "G"] },
    { id: 2, name: "Mesh Bodysuit Noir", category: "Bodysuits", price: 720.00, image: "https://ellaz.com/cdn/shop/files/CorsetBodysuit04_Black_grande.jpg?v=1730955025",  sizes: ["CH", "M", "G"] },
    { id: 3, name: "Inferno Lace Set", category: "Sets", price: 890.00, image: "https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/3643584.jpg",  sizes: ["CH", "M", "G"] },
    { id: 4, name: "Reckless Bralette", category: "Tops", price: 380.00, image: "https://ellaz.com/cdn/shop/files/TriangleBralette01_Black_3f7d70cb-26d2-4b9e-a2c0-62b7cf35bb26.jpg?v=1730956604",  sizes: ["CH", "M", "G"] },
    { id: 5, name: "Leather Leg Straps", category: "Accessories", price: 320.00, image: "https://ae-pic-a1.aliexpress-media.com/kf/S7426e587431e4386abf0298cb3fd180fR.png", sizes: ["CH", "M", "G"] },
    { id: 6, name: "Midnight Silk Robe", category: "Sleepwear", price: 1250.00, image: "https://www.petite-plume.com/cdn/shop/files/ASWRMNB_2FASWRMNB_Navy_5.jpg?v=1741721697&width=2048", sizes: ["CH", "M", "G"] },
    { id: 7, name: "Toxic Love Corset", category: "Corsets", price: 1100.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0R-LtT6Xf9LF-zvKPSUhQMfAddNY31IU0FA&s", sizes: ["CH", "M", "G"] },
    { id: 8, name: "Viper Garter Belt", category: "Accessories", price: 250.00, image: "https://www.lavieenrose.com/globalassets/4---pictures/pictures-21f2-and--/lingerie-accessories/garter-belt-roses-lace-10400001-00001/596-124-1-00_00001_1_mashal.jpg", sizes: ["CH", "M", "G"] },
    { id: 9, name: "Sheer Destruction Top", category: "Tops", price: 420.00, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80", sizes: ["CH", "M", "G"] },
    { id: 10, name: "Bad Reputation Chains", category: "Accessories", price: 550.00, image: "https://images.unsplash.com/photo-1616149562385-1d84e79478bb?auto=format&fit=crop&w=600&q=80", sizes: ["CH", "M", "G"] },
    { id: 11, name: "Neon Demon Set", category: "Sets", price: 680.00, image: "https://m.media-amazon.com/images/I/61lMQdBZR8L._AC_UF894,1000_QL80_.jpg", sizes: ["CH", "M", "G"]},
    { id: 12, name: "Fishnet Danger", category: "Bottoms", price: 200.00, image: "https://cdn.shopify.com/s/files/1/0293/9277/files/09-09-25_S4PM_9_9717FNA_Black_RK_AC_17-23-13_1485_PXF.jpg?v=1757616569", sizes: ["CH", "M", "G"] },
    { id: 13, name: "Obscure Body", category: "Bodysuits", price: 750.00, image: "https://www.corse.mx/cdn/shop/files/image00003_842abbd8-405a-4839-8173-65a7edc61f3c_1.jpg?v=1749152433&width=1445", sizes: ["CH", "M", "G"] },
    { id: 14, name: "Velvet Crush Panty", category: "Bottoms", price: 280.00, image: "https://www.victoriassecret.com/p/874x1165/png/zz/24/02/01/02/1124542792D0_OM_F.jpg", sizes: ["CH", "M", "G"] },
    { id: 15, name: "Tokyo Drift Kimono", category: "Sleepwear", price: 1500.00, image: "https://i5.walmartimages.com/asr/0e930b43-dc66-4749-b8d5-6236ad981aa3.d8429496c5352b1be6b870498e210161.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", sizes: ["CH", "M", "G"] }
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





