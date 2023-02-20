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
            stock
        };

    this.products.push(product);
    };


addProduct = (title1, description1, price1, thumbnail1, code1, stock1) => {
  const productIndex = this.products.findIndex((product) => product.code === code1);

  const productoAgregar = {
    id: this.products.length + 1,
    title1,
    description1,
    price1,
    thumbnail1,
    code1,
    stock1
};

if(title1 === undefined ||
   description1 === undefined ||
   price1 === undefined ||
   thumbnail1 === undefined ||
   code1 === undefined ||
   stock1 === undefined) {console.log("Falta un campo requerido")} else {

  const codeExists = 

    this.products[productIndex]?.code === code1;

  if (codeExists) {
    console.log("Existe un código igual ya registrado!");
    return;
  } else {
  this.products.push(productoAgregar);
   }
};
};


getProductsById = (id) => {
    let productId = id;
    const encontrado = this.products.find(element => element.id === productId);
    if(encontrado) {
      console.log(encontrado);}
      else {
        console.log('Not found');
      }
    return;
  };
}

const productManager = new ProductManager();


productManager.createProduct("Caja", "Una caja", 150, "a.jpg", 1, 20);
productManager.createProduct("Oso", "Un oso de peluche", 200, "b.jpg", 2, 20);
productManager.addProduct("Caja", "Una caja", 150, "a.jpg", 5, 20);
productManager.getProducts();
productManager.getProductsById(5);


