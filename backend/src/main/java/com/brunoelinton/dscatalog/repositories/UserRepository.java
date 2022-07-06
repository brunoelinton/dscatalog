package com.brunoelinton.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brunoelinton.dscatalog.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
