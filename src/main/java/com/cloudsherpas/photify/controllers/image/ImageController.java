package com.cloudsherpas.photify.controllers.image;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cloudsherpas.photify.model.album.Album;
import com.cloudsherpas.photify.model.album.AlbumList;
import com.cloudsherpas.photify.model.image.Image;
import com.cloudsherpas.photify.model.image.ImageList;

@Controller
public class ImageController {
	@RequestMapping(value={"/imageList/{albumId}"}, method=RequestMethod.GET, headers = "Accept=application/json")
	public @ResponseBody ImageList getImageList(@PathVariable final String albumId){
		ImageList aList = new ImageList();
		aList.add(new Image("https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Chrome_Logo.svg/1024px-Chrome_Logo.svg.png"));
		aList.add(new Image("https://mozorg.cdn.mozilla.net/media/img/firefox/desktop/index/animations/firefox-logo.bee1d85af18f.png"));
		return aList;
	}
}
