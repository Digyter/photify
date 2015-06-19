package com.cloudsherpas.photify.model.album;

public class Album {
	private String name;

	public Album(){
		
	}
	
	public Album(String name){
		this.name = name;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
