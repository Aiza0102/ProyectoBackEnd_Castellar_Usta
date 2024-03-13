class ProductManager {
    constructor() {
        this.products = [];
        this.currentId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los campos son obligatorios.");
        }

        if (this.products.some(product => product.code === code)) {
            throw new Error("El código del producto ya existe.");
        }

        const newProduct = {
            id: this.currentId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        console.log("Producto agregado correctamente.");
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            throw new Error("Producto no encontrado.");
        }
    }

    getProductByCode(code) {
        const product = this.products.find(product => product.code === code);
        if (product) {
            return product;
        } else {
            throw new Error("Producto no encontrado.");
        }
    }

    updateProduct(id, newData) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...newData };
            console.log("Producto actualizado correctamente.");
        } else {
            throw new Error("Producto no encontrado.");
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log("Producto eliminado correctamente.");
        } else {
            throw new Error("Producto no encontrado.");
        }
    }

    showProductsInStock() {
        const productsInStock = this.products.filter(product => product.stock > 0);
        if (productsInStock.length > 0) {
            console.log("Productos en stock:");
            productsInStock.forEach(product => {
                console.log(`${product.title} - ${product.stock} unidades disponibles`);
            });
        } else {
            console.log("No hay productos en stock.");
        }
    }
}

const manager = new ProductManager();

try {
    console.log(manager.getProducts());

    manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

    console.log(manager.getProducts());

    manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
} catch (error) {
    console.error(error.message);
}

try {
    console.log(manager.getProductById(1)); 
    console.log(manager.getProductById(999)); 
} catch (error) {
    console.error(error.message);
}