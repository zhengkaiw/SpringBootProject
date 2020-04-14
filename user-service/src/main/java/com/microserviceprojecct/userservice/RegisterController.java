package com.microserviceprojecct.userservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.mongodb.core.MongoTemplate;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:8090" })
@Controller
public class RegisterController {

    @Autowired
    private UserService userService;

    @Autowired
    private MongoTemplate mongoTemplate;

    @RequestMapping("/register")
    public String registerUser(Model model) {
        User user = new User();
        model.addAttribute("user", user);

        return "register";
    }

//    @RequestMapping(value = "/register", method = RequestMethod.POST)
//    public String registerUserPost(@Valid @ModelAttribute("user") User user, BindingResult result, Model model) {
//        if (result.hasErrors()) {
//            return "register";
//        }
//
//        User newUser = userService.findByUsername(user.getUsername());
//        if (newUser != null) {
//            model.addAttribute("usernameMsg", "Username already exist");
//            return "register";
//        }
//
//        userService.save(user);
//
//        return "login";
//    }

    @PostMapping("/register")
    public ResponseEntity<User> createTutorial(@RequestBody User user) {
        try {
            User newUser = userService.insert(new User(user.getUsername(), user.getPassword()));
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }

    }

    @ResponseBody
    @RequestMapping("/find")
    public List<User> find() {
        return mongoTemplate.findAll(User.class);
    }
}
