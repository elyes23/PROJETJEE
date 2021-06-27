package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.demo.entities.Category;
import com.example.demo.entities.Product;
import com.example.demo.entities.User;
import com.example.demo.repositories.ICategoryRepository;
import com.example.demo.repositories.IProductRepository;
import com.example.demo.repositories.IUserRepository;

@SpringBootApplication
public class JavaProjectApplication implements ApplicationRunner {
	
	@Autowired
	private IUserRepository userRepository;
	
	@Autowired
	private IProductRepository productRepository;
	
	@Autowired
	private ICategoryRepository categoryRepository;
	


	public static void main(String[] args) {
		SpringApplication.run(JavaProjectApplication.class, args);
	}
	


	@Override
	public void run(ApplicationArguments args) throws Exception {
		if (!userRepository.findById(1).isPresent())
		{
			
			Category category= new Category();
			category.setNameCategory("Automobile");
			categoryRepository.save(category);
			
			Category categorya = new Category();
			categorya.setNameCategory("Electronique");
			categoryRepository.save(categorya);
			
			
			Product product = new Product();
			product.setNameProduct("GOLF");
			product.setPrice(100.150);
		    product.setDetails("Le nouveau modèle de voiture , elle a 2 ans, sa couleur est rouge");
		    product.setCategory(category);
			productRepository.save(product);
			
			Product product2 = new Product();
			product2.setNameProduct("POLO 5");
			product2.setPrice(180.150);
			product2.setDetails("Le nouveau modèle de voiture , elle a 2 ans, sa couleur est vert");
			product2.setCategory(category);
			productRepository.save(product2);
			
			Product product3 = new Product();
			product3.setNameProduct("BMW");
			product3.setPrice(104.150);
			product3.setDetails("le modèle de 2006,etat neuf ,couleur gris");
			product3.setCategory(category);
			productRepository.save(product3);
			
			
			
			User user = new User();
			user.setLogin("admin");
			user.setPassword("admin");
			userRepository.save(user);
	    }
		
	}


}
