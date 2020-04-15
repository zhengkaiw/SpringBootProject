package com.microserviceprojecct.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class RegisterController {

    @Autowired
    UserRepository userRepository;

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<User> createTutorial(@RequestBody User user) {
        try {
            User newUser = userRepository.insert(new User(user.getName(), user.getEmail(), user.getUsername(), user.getPassword()));
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }

    }
}
