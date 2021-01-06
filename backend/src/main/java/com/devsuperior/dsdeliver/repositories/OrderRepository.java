package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.Product;

public interface OrderRepository extends JpaRepository<Order, Long> {

	List<Product> findAllByOrderByNameAsc();
}
