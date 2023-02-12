package org.acme;

import com.oracle.svm.core.annotate.Inject;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.Emitter;

public class KafkaProducer {
    @Inject
    @Channel("post-out")
    Emitter<Post> emitter;

    //Logging
    public void sendPost(Post post) {
        emitter.send(post);
    }
}
