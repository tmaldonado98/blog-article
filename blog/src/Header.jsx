import { Text } from "@chakra-ui/react";


export default function Header () {
    const mainLogo = 'https://firebasestorage.googleapis.com/v0/b/maneuver1-e17b6.appspot.com/o/main-logo.jpeg?alt=media&token=6bb47772-5a54-4d1e-b19d-032b620ec8ce';
    const menopause2 = 'https://firebasestorage.googleapis.com/v0/b/maneuver1-e17b6.appspot.com/o/menopause2.jpg?alt=media&token=b5747b3f-edf5-4a99-a003-a85431eeaf0d';

    return (
        <section id="header-section">
            <section id="title">
                <img src={mainLogo} alt="Main Logo" style={{width:'250px'}}/>
                <h1>Let's Talk About Menopause...</h1>
            </section>
            <section  id="container-header-img">
                <img src={menopause2} alt='Image of menopausal woman.' id="header-img"/>
                <p>
                    <sub style={{fontSize:'16px'}}>
                        Learn to identify the symptoms of menopause and its remedies.
                    </sub>
                </p>
            </section>
            <section style={{margin:'4px auto'}} className="eighty-section">
                <article style={{fontFamily:"Bacasime Antique, Georgia", fontSize:'19px'}}>
                    <Text noOfLines={[1, 2, 3]} style={{textAlign:'center'}}>
                        What does menopause feel like? <br/>
                        How can menopause affect your body?<br/>
                        What is menopause?<br/>
                    </Text>
                </article>
                <article style={{fontFamily:"Open Sans, Georgia"}}>
                    <Text noOfLines={[1, 2, 3]}>
                        If you have ever asked yourself these questions,
                        read on to learn about menopause, how it can affect you
                        or your loved ones, and how you can alleviate its symptoms.
                    </Text>
                </article>
            </section>
        </section>
    )
}