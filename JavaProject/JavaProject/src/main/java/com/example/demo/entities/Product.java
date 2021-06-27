package com.example.demo.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Product  implements Serializable {
	
	/**
	 * 
	 */

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	public Integer id;
	public String nameProduct;
	public Double price;
	public String details;
	
	@ManyToMany(mappedBy = "products")
	@JsonIgnore
	public List<User> likedUsers;
	

	@ManyToOne
    @JoinColumn(name="category_id", nullable=true)
	public Category category;
	
	
	public List<User> getLikedUsers() {
		return likedUsers;
	}
	public void setLikedUsers(List<User> likedUsers) {
		this.likedUsers = likedUsers;
	}
	
	
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Integer getIdProduct() {
		return id;
	}
	public void setIdProduct(Integer idProduct) {
		this.id = idProduct;
	}
	public String getNameProduct() {
		return nameProduct;
	}
	public void setNameProduct(String nameProduct) {
		this.nameProduct = nameProduct;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	
	

}
