package org.acme;

public class Post {
    public String title;
    public String body;
    public String author;

    public Post(String title, String body, String author) {
        this.title = title;
        this.body = body;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
