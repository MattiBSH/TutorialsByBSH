package org.acme;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api/kafka")
@Produces(MediaType.APPLICATION_JSON)
public class KafkaResource{
        @Inject
        KafkaProducer producer;

        @POST
        @Consumes(MediaType.APPLICATION_JSON)
        public Response send(Post post) {
            producer.sendPost(post);
            // Return an 202 - Accepted response.
            return Response.accepted().build();
        }
}

