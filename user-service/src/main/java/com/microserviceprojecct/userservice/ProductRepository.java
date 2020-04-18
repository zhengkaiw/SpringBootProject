package com.microserviceprojecct.userservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "FROM Product ORDER BY Productauthor ASC")
    List<Product> getSortByAuthor();

    @Query(value = "FROM Product ORDER BY Productname ASC")
    List<Product> getSortByTitle();

    @Query(value = "FROM Product ORDER BY Productprice ASC")
    List<Product> getSortByPrice();

    @Query(value = "FROM Product ORDER BY Rating ASC")
    List<Product> getSortByBookRating();

    @Query(value = "FROM Product ORDER BY topsellerstatus ASC")
    List<Product> getSortByTopSellers();

    @Query(value = "FROM Product ORDER BY Productreleasedate ASC")
    List<Product> getSortByReleaseDate();



}
