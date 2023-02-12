package org.acme;

import io.quarkus.kafka.client.serialization.ObjectMapperDeserializer;
import org.acme.Post;

public class PostDeserializer extends ObjectMapperDeserializer<Post> {
    public PostDeserializer() {
        super(Post.class);
    }
}
