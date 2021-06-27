package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.Product;
import com.example.demo.entities.User;
import com.example.demo.repositories.ICategoryRepository;
import com.example.demo.repositories.IProductRepository;
import com.example.demo.repositories.IUserRepository;


@RestController
@RequestMapping("/products")
@CrossOrigin(origins ="*")
public class ProductRestController {
	
	@Autowired
	private IProductRepository productRepository;
	
	@Autowired
	private IUserRepository userRepository;
	
	@Autowired
	private ICategoryRepository categoryRepository;

	
	@RequestMapping(value = "/listProduct", method = RequestMethod.GET)
	
	public List<Product> getAllProduct(){
		return productRepository.findAll();
	}
	
	@RequestMapping(value = "/categories", method = RequestMethod.GET)
		public List<Category> getAllCategories(){
		return categoryRepository.findAll();
	}
	
	@RequestMapping(value = "/addProduct", method = RequestMethod.POST)
		public Product addProduct(@RequestBody Product product){
		return productRepository.save(product);
	}
	
	@RequestMapping(value = "/getProduct/{idProduct}", method = RequestMethod.GET)
	
	public Product getProduct(@PathVariable Integer idProduct){
		return productRepository.findById(idProduct).get();
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	
	public User Login(@RequestBody User user){
		User userResponse = userRepository.findByLogin(user.getLogin());
		return userResponse;
	}
	
	@RequestMapping(value = "/myPanel/{id}", method = RequestMethod.GET)
		public List<Product> Mypanel(@PathVariable Integer id ){
		User userResponse = userRepository.getById(id);
		return userResponse.getProducts();
	}
	
	
	@RequestMapping(value = "/addProductToPanel/{idProduct}/{idUser}", method = RequestMethod.GET)
	
	public boolean addProductToPanel(@PathVariable Integer idProduct, @PathVariable Integer idUser ){
		User userResponse = userRepository.getById(idUser);
		Product product= productRepository.getById(idProduct);
		userResponse.getProducts().add(product);
		userRepository.save(userResponse);
		return true;
	}
	
	@RequestMapping(value = "/removeProductToPanel/{idProduct}/{idUser}", method = RequestMethod.GET)
	
	public boolean removeProductToPanel(@PathVariable Integer idProduct, @PathVariable Integer idUser ){
		User userResponse = userRepository.getById(idUser);
		Product product= productRepository.getById(idProduct);
		userResponse.getProducts().remove(product);
		userRepository.save(userResponse);
		return true;
	}


	
	
	
	
	
	
	
}
