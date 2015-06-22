package com.cloudsherpas.photify.controllers.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cloudsherpas.photify.model.user.UserDetails;
import com.cloudsherpas.photify.model.user.UserModel;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

@Controller
public class LoginController {	
	@RequestMapping(value={"/login"}, method=RequestMethod.GET, headers = "Accept=application/json")
	public @ResponseBody UserDetails getAlbumList(){
		
		UserService userService = UserServiceFactory.getUserService();
	    User currentUser = userService.getCurrentUser();
	    UserDetails userDetails = new UserDetails();    
	    
	    if (userService.isUserLoggedIn()) {	    	
	    	UserModel userModel = new UserModel();
	    	userModel.setId(currentUser.getUserId());
	    	userModel.setFederatedIdentity(currentUser.getFederatedIdentity());
	    	userModel.setName(currentUser.getNickname());
	    	userModel.setEmail(currentUser.getEmail());
	    	userDetails.setUser(userModel);
	    } else {	
	    	userDetails.setSigninUrl(userService.createLoginURL("index.jsp"));	    	   	
	    }	    
		return userDetails;
	}
	
}
