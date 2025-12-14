// Products CRUD Operations
export const getProducts = () => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : [];
};

export const addProduct = (product) => {
  const products = getProducts();
  const newProduct = {
    id: Date.now(),
    ...product,
    createdAt: new Date().toISOString()
  };
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
  return newProduct;
};

export const updateProduct = (id, updatedProduct) => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    localStorage.setItem('products', JSON.stringify(products));
    return products[index];
  }
  return null;
};

export const deleteProduct = (id) => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  localStorage.setItem('products', JSON.stringify(filtered));
  return filtered;
};

// Initialize default products
export const initializeDefaultProducts = () => {
  const existing = getProducts();
  if (existing.length === 0) {
    const defaultProducts = [
      {
        id: 1,
        name: "NN-FC-TM SERIES Filtration Combo",
        description: "Designed for easy setup of domestic pools, the NN-FC-TM SERIES Filtration Combo offers the ideal solution for home users seeking user-friendly operation and excellent filtration performance.",
        image: "/images/products/filtration-combo.jpg.png",  // ✅ PNG extension add kar diya
        category: "Filtration"
      },
      {
        id: 2,
        name: "NN-VSP-PP Variable Speed Pumps",
        description: "NN-VSP-PP variable-speed pumps continuously adjust their water flow to match real-time system demand.",
        image: "/images/products/variable-pump.jpg.png",  // ✅ PNG extension
        category: "Pumps"
      },
      {
        id: 3,
        name: "Radial Flow Gas Pump",
        description: "The Radial Flow Gas Pump is a high-performance air-moving solution, also known as a ring blower.",
        image: "/images/products/radial-blower.jpg.png",  // ✅ PNG extension
        category: "Air Blowers"
      }
    ];
    localStorage.setItem('products', JSON.stringify(defaultProducts));
  }
};
