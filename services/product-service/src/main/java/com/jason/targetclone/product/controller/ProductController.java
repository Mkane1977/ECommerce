package com.jason.targetclone.product.controller;

import com.jason.targetclone.product.model.Product;
import com.jason.targetclone.product.service.ProductService; // Import the service
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Enables CORS for React frontend
@RestController
@RequestMapping("/api/products") // Base URL for this controller
public class ProductController {

    @Autowired
    private ProductService productService; // Dependency Injection for service layer

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts(); // Fetch products from service
    }
}
