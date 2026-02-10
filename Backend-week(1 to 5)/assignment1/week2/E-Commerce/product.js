//   i. product.js - Product catalog
                          // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                          export function getProductById(id) {
                            // Find and return product by ID
                            return products.find((p)=>p.pid==id);
                          }
                          
                          export function getAllProducts() {
                            // Return all products
                            return products;
                          }
                          
                          export function getProductsByCategory(category) {
                            // Filter products by category
                             return products.filter((p)=>p.catagory==category);
                          }
                          
                          export function searchProducts(query) {
                            // Search products by name (case-insensitive)
                            return products.find((p)=>p.name.toLowerCase()==query.toLowerCase());

                          }
                          
                          export function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            // Return true/false
                            return products.find((p)=>p.pid==productId && p.stock>=quantity)?true:false;
                          }
                          
                          export function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
                            const product= products((p)=>p.id==productId)
                            if( product.stock>=quantity)
                                product.stock-=quantity
                          }
                            

export { getProductById, getAllProducts, getProductsByCategory, searchProducts, checkStock, reduceStock };