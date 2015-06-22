package com.cloudsherpas.photify.model.user;

public class UserModel {
	
	private String name;
	private String email;
	private String id;
	private String federatedIdentity;
	
	
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
	

}
