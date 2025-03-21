package com.jason.targetclone.product.repository;

import com.jason.targetclone.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // You can define custom queries here if necessary
}
