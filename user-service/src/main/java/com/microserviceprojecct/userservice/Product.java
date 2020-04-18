package com.microserviceprojecct.userservice;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "product")
public class Product {

    @Id
    private int id;

    @Column(name = "productauthor")
    private String productAuthor;
    @Column(name = "productauthorbio")
    private String productAuthorBio;
    @Column(name = "productcategory")
    private String productCategory;
    @Column(name = "productcondition")
    private String productCondition;
    @Column(name = "productdescription")
    private String productDescription;
    @Column(name = "productname")
    private String productName;
    @Column(name = "productprice")
    private double productPrice;
    @Column(name = "productpublisher")
    private String productPublisher;
    @Column(name = "productreleasedate")
    private Date productReleaseDate;
    @Column(name = "productstatus")
    private String productStatus;
    @Column(name = "topsellerstatus")
    private String topSellerStatus;
    @Column(name = "unitinstock")
    private int unitInStock;
    @Column(name = "numrating")
    private double numRating;
    @Column(name = "rating")
    private double rating;
    @Column(name = "totalrating")
    private double totalRating;

    public Product() {
    }

    public Product(String productAuthor, String productAuthorBio, String productCategory, String productCondition, String productDescription, String productName, double productPrice, String productPublisher, Date productReleaseDate, String productStatus, String topSellerStatus, int unitInStock, double numRating, double rating, double totalRating) {
        this.productAuthor = productAuthor;
        this.productAuthorBio = productAuthorBio;
        this.productCategory = productCategory;
        this.productCondition = productCondition;
        this.productDescription = productDescription;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productPublisher = productPublisher;
        this.productReleaseDate = productReleaseDate;
        this.productStatus = productStatus;
        this.topSellerStatus = topSellerStatus;
        this.unitInStock = unitInStock;
        this.numRating = numRating;
        this.rating = rating;
        this.totalRating = totalRating;
    }

    public int getId() {
        return id;
    }

    public String getProductAuthor() {
        return productAuthor;
    }

    public void setProductAuthor(String productAuthor) {
        this.productAuthor = productAuthor;
    }

    public String getProductAuthorBio() {
        return productAuthorBio;
    }

    public void setProductAuthorBio(String productAuthorBio) {
        this.productAuthorBio = productAuthorBio;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public String getProductCondition() {
        return productCondition;
    }

    public void setProductCondition(String productCondition) {
        this.productCondition = productCondition;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductPublisher() {
        return productPublisher;
    }

    public void setProductPublisher(String productPublisher) {
        this.productPublisher = productPublisher;
    }

    public Date getProductReleaseDate() {
        return productReleaseDate;
    }

    public void setProductReleaseDate(Date productReleaseDate) {
        this.productReleaseDate = productReleaseDate;
    }

    public String getProductStatus() {
        return productStatus;
    }

    public void setProductStatus(String productStatus) {
        this.productStatus = productStatus;
    }

    public String getTopSellerStatus() {
        return topSellerStatus;
    }

    public void setTopSellerStatus(String topSellerStatus) {
        this.topSellerStatus = topSellerStatus;
    }

    public int getUnitInStock() {
        return unitInStock;
    }

    public void setUnitInStock(int unitInStock) {
        this.unitInStock = unitInStock;
    }

    public double getNumRating() {
        return numRating;
    }

    public void setNumRating(double numRating) {
        this.numRating = numRating;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public double getTotalRating() {
        return totalRating;
    }

    public void setTotalRating(double totalRating) {
        this.totalRating = totalRating;
    }
}
