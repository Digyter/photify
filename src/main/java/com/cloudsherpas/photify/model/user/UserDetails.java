package com.cloudsherpas.photify.model.user;

public class UserDetails {
	
	private String name;
	private String email;
	private String id;
	private String federatedIdentity;
	private String logoutURL;
	private String loginURL;
	public boolean isUserLoggedIn;
	
	public String getFederatedIdentity() {
		return federatedIdentity;
	}
	public void setFederatedIdentity(String federatedIdentity) {
		this.federatedIdentity = federatedIdentity;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getLogoutURL() {
		return logoutURL;
	}
	public void setLogoutURL(String logoutURL) {
		this.logoutURL = logoutURL;
	}
	public String getLoginURL() {
		return loginURL;
	}
	public void setLoginURL(String loginURL) {
		this.loginURL = loginURL;
	}	


}
