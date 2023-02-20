class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    console.log(this.products);
    return;
  };

  createProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const productIndex = this.products.findIndex(
      (product) => product.code === code
    );

    const productoAgregar = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (
      title === undefined ||
      description === undefined ||
      price === undefined ||
      thumbnail === undefined ||
      code === undefined ||
      stock === undefined
    ) {
      console.log("Falta un campo requerido");
    } else {
      const codeExists = this.products[productIndex]?.code === code;

      if (codeExists) {
        console.log("Existe un código igual ya registrado!");
        return;
      } else {
        this.products.push(productoAgregar);
      }
    }
  };

  getProductsById = (id) => {
    let productId = id;
    const encontrado = this.products.find(
      (element) => element.id === productId
    );
    if (encontrado) {
      console.log(encontrado);
    } else {
      console.log("Not found");
    }
    return;
  };
}

/* Testing */
const productManager = new ProductManager();
productManager.getProducts();
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
productManager.getProducts();
productManager.addProduct("producto 2", "Este es otro producto prueba", 300, "Sin imagen", "abc123", 25);
productManager.getProductsById(5);

