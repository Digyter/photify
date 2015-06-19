package com.cloudsherpas.photify.controllers.album;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cloudsherpas.photify.model.album.Album;
import com.cloudsherpas.photify.model.album.AlbumList;

@Controller
public class AlbumController {
	
	@RequestMapping(value={"/albumList/{userId}"}, method=RequestMethod.GET, headers = "Accept=application/json")
	public @ResponseBody AlbumList getAlbumList(@PathVariable final String userId){
		AlbumList aList = new AlbumList();
		aList.add(new Album("Album1"));
		aList.add(new Album("Album2"));
		return aList;
	}
	
}
