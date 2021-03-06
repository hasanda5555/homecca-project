package com.social.controller;

import java.security.Principal;

import com.social.services.NotificationServices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.social.services.UserService;
import com.social.util.CustomErrorType;
import com.social.entities.User;
import com.social.entities.ContactMessage;
/** 
 * @author kamal berriga
 *
 */
@RestController
@RequestMapping("account")
public class AccountController {

	public static final Logger logger = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private UserService userService;

	@Autowired
	private NotificationServices notificationServices;

	// request method to create a new account by a guest
	@CrossOrigin
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody User newUser) {
		if (userService.find(newUser.getUsername()) != null) {
			logger.error("username Already exist " + newUser.getUsername());
			return new ResponseEntity(
					new CustomErrorType("user with username " + newUser.getUsername() + "already exist "),
					HttpStatus.CONFLICT);
		}
		newUser.setRole("USER");

		//send notitication to user
		try {
			//MiniMessage msg = new MiniMessage();
			//msg.setSubject(newUser.getFullName()+", Wellcome to Homeeca");
			//msg.setBody("please visit link to activate your account <a href='http://google.com' "+newUser.getId()+">Link</a>.");
			notificationServices.sendNotification(newUser);
		}catch ( Exception e){
			logger.error("email error : " + e.getLocalizedMessage());
		}

		return new ResponseEntity<User>(userService.save(newUser), HttpStatus.CREATED);
	}

	// this is the login api/service
	@CrossOrigin
	@RequestMapping("/login")
	public Principal user(Principal principal) {
		logger.info("user logged "+principal);
		return principal;
	}

	// request method to create a new account by a guest
	@CrossOrigin
	@RequestMapping(value = "/sendMessage", method = RequestMethod.POST)
	public ResponseEntity<?> sendNotificationMessage(@RequestBody ContactMessage msg) {

		//send notitication to user
		try {

			notificationServices.sendNotificationMessage(msg);
		}catch ( Exception e){
			logger.error("email error : " + e.getLocalizedMessage());
		}

		return new ResponseEntity<ContactMessage>(HttpStatus.ACCEPTED);

	}

	
	
}
