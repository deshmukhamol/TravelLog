package org.travelloc.ng2boot;

public class Travellog {

    private final long id;
    private final String title;

    public Travellog(long id, String title) {
        this.id = id;
        this.title = title;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return title;
    }
    
}
