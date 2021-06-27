package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.User;

public interface IUserRepository extends JpaRepository<User, Integer> {
	

	  @Query("select u from User u where u.login = :login")
	  User findByLogin(@Param("login") String login);

}
