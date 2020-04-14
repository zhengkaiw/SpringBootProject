package com.microserviceprojecct.userservice;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserService extends MongoRepository<User, String> {

    public User findByUsername(String username);
}
