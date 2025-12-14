import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../utils/localStorage';
import '../styles/Admin.css';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    category: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    setProducts(getProducts());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      updateProduct(editingId, formData);
      setEditingId(null);
      alert('Product updated successfully!');
    } else {
      addProduct(formData);
      alert('Product added successfully!');
    }
    
    setFormData({ name: '', description: '', image: '', category: '' });
    setImageFile('');
    loadProducts();
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      image: product.image,
      category: product.category
    });
    const fileName = product.image.split('/').pop();
    setImageFile(fileName);
    setEditingId(product.id);
    window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
      alert('Product deleted successfully!');
      loadProducts();
    }
  };

  const handleImageChange = (e) => {
    const fileName = e.target.value;
    setImageFile(fileName);
    setFormData({
      ...formData,
      image: `/images/products/${fileName}`
    });
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <p>Manage Products - Add, Edit, or Delete</p>
      </div>

      <div className="admin-content">
        <div className="admin-form-section">
          <h2>{editingId ? '✏️ Edit Product' : '➕ Add New Product'}</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>Product Name *</label>
              <input
                type="text"
                placeholder="Enter product name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                placeholder="Enter product description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
                rows="4"
              />
            </div>

            <div className="form-group">
              <label>Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                required
              >
                <option value="">-- Select Category --</option>
                <option value="Filtration">Filtration</option>
                <option value="Pumps">Pumps</option>
                <option value="Air Blowers">Air Blowers</option>
                <option value="Pool Cleaning Equipment">Pool Cleaning Equipment</option>
                <option value="Robotic Pool Cleaners">Robotic Pool Cleaners</option>
              </select>
            </div>

            <div className="form-group">
              <label>Image Filename *</label>
              <input
                type="text"
                placeholder="e.g., product4.jpg"
                value={imageFile}
                onChange={handleImageChange}
                required
              />
              <small className="form-hint">
                📁 First upload image to: <code>public/images/products/</code> folder
              </small>
            </div>

            {formData.image && (
              <div className="image-preview">
                <p>Preview:</p>
                <img src={formData.image} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                {editingId ? '💾 Update Product' : '➕ Add Product'}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({ name: '', description: '', image: '', category: '' });
                    setImageFile('');
                  }}
                >
                  ❌ Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="products-list-section">
          <h2>📦 All Products ({products.length})</h2>
          
          {products.length === 0 ? (
            <div className="no-products-admin">
              <p>No products available. Add your first product above!</p>
            </div>
          ) : (
            <div className="products-table-wrapper">
              <table className="products-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="table-img"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/80x60?text=No+Image'}
                        />
                      </td>
                      <td><strong>{product.name}</strong></td>
                      <td><span className="category-badge">{product.category}</span></td>
                      <td className="description-cell">{product.description.substring(0, 80)}...</td>
                      <td>
                        <div className="action-buttons">
                          <button onClick={() => handleEdit(product)} className="btn-edit">
                            ✏️ Edit
                          </button>
                          <button onClick={() => handleDelete(product.id)} className="btn-delete">
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
