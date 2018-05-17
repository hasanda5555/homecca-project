package com.social.controller;

import com.social.entities.User;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("home")
public class HomeController {

    @CrossOrigin
    @RequestMapping(value = "/calculate", method = RequestMethod.POST)
    public int calculate(@RequestBody String number) {
      int newNumber=  Integer.parseInt(number);
       return newNumber *5;
    }
}
