
import  ImageUrlBuilder  from "@sanity/image-url";
import  SanityClient from "@sanity/client";

export const client = SanityClient({    
    projectId: '62xze831',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: "skn9HHco1oWXGBgAnw7nFdhhGVYV5Qs2BOyKjscf6RkE8J4gpL0PhVDNN9UX393faxYztnhtf8I57RyPtigAvKy6BRamEtlAibYTGT1dJjebGG1CdtkCFCjJyCMI1Zk9KW8cLRLMLS2eFTQHgG6t4x6jK1SLIzIEAfqaG2740ryuk8IoVKmT"
})

const builder  = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
