package com.cloudsherpas.photify.model.user;

public class UserDetails {
	private UserModel user;
	private String signinUrl;

	public String getSigninUrl() {
		return signinUrl;
	}

	public void setSigninUrl(String signinUrl) {
		this.signinUrl = signinUrl;
	}

	public UserModel getUser() {
		return user;
	}

	public void setUser(UserModel user) {
		this.user = user;
	}

}
