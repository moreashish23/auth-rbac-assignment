package com.product.system.service;


import com.product.system.dto.ProductRequest;
import com.product.system.entity.Product;

import java.util.List;

public interface ProductService {

    Product createProduct(ProductRequest request);

    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product updateProduct(Long id, ProductRequest request);

    void deleteProduct(Long id);
}
