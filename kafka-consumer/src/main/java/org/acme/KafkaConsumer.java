package org.acme;

import org.eclipse.microprofile.reactive.messaging.Incoming;
import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class KafkaConsumer {
    @Incoming("post-in")
    public Post receive(Post post) {
        System.out.println("Received post: " + post.toString());

        //Do something with the post
        //...

        return post;
    }
}
