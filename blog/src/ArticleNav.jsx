import { Card, CardBody,
Image, Stack, Heading, Text} from '@chakra-ui/react'



export default function ArticleNav(){

    window.scroll({behavior: 'smooth'})

    const author = 'https://firebasestorage.googleapis.com/v0/b/maneuver1-e17b6.appspot.com/o/author.jpg?alt=media&token=decb29a5-cd6e-4927-91a0-18fecc074f7c';

    return (
        <section id="container-nav-author">
            <div>
                <ol className="text">
                    <a href="#sect1"><li>What Is Menopause?</li></a>
                    <li>The 3 Stages of Menopause
                        <ul>
                            <li>
                                <a href="#sect2">Premenopause</a>
                            </li>
                            <li>
                                <a href="#sect3">Menopause</a>
                            </li>
                            <li>
                                <a href="#sect4">Postmenopause</a>
                            </li>
                        </ul>
                    </li>
                    <a href="#sect5"><li>References</li></a>
                    <a href="#sect6"><li>Disclaimer</li></a>
                </ol>
            </div>
            <div id="author-box">
                <Card maxW='sm' style={{boxShadow:'0px 0px 1px 0px'}}>
                <Heading size='md' style={{paddingTop:'12px'}}>About Me</Heading>
                    <CardBody>
                        <Image
                        src={author}
                        alt='Author Image'
                        borderRadius='100px'
                        width='120px'
                        />
                        <Stack mt='6' spacing='3'>
                            <Text style={{padding:'5px'}} className="text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet accusantium magni perferendis laudantium architecto quidem fugit.
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}