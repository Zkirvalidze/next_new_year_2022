
import  ImageUrlBuilder  from "@sanity/image-url";
import  SanityClient from "@sanity/client";

export const client = SanityClient({    
    projectId: '62xze831',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder  = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
