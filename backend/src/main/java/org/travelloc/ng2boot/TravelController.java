package org.travelloc.ng2boot;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api/travel")
public class TravelController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private final Travellog[] travelLocations = new Travellog[15];

    
    @RequestMapping(method=RequestMethod.GET)
    public @ResponseBody Travellog[] getLocations() {
    	travelLocations[0] = new Travellog(1,"Mumbai");
        return travelLocations;
    }
    
	    
}
