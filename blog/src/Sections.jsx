import { Text, Mark, Highlight } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import LazyLoad from 'react-lazyload';

function toTop() {
    const firstSect = document.getElementById('sect1');

    window.scroll({
        top: 0,
        left:0,
        behavior:'smooth'
    })
}

const ppm = 'https://firebasestorage.googleapis.com/v0/b/maneuver1-e17b6.appspot.com/o/ppm.jpg?alt=media&token=20ddb4c5-d4dc-4862-a175-dd3ac610babb';
const ppm2 = 'https://firebasestorage.googleapis.com/v0/b/maneuver1-e17b6.appspot.com/o/ppm2.png?alt=media&token=97569c68-36e1-46b7-b7aa-d06f61233dc9';
const menopause = 'https://firebasestorage.googleapis.com/v0/b/maneuver1-e17b6.appspot.com/o/menopause.jpg?alt=media&token=0fbfae6e-4a06-4f9a-84fb-219ad66497a6';

export function Sect1(){
        return (
            <section id="sect1" className='text sects'>
                <h2><u>What is Menopause?</u></h2>
                <article>
                    <Text noOfLines={[1, 2, 3]}>
                        Women have always been known to have great intuition, especially when it comes to their body reacting to
                        certain conditions - emotionally, mentally or physically.
                    </Text>
                </article>

                    <article>
                        <Text noOfLines={[1, 2, 3]}>
                        These “feelings” tend to get “out of control” during specific phases of our life, the kind that we see in movies but
                         not explicitly discussed before it happens.
                        </Text>
                    </article>

                    <article>
                        <Text noOfLines={[1, 2, 3]}>
                        We start to sense a shift in the way our body works; drastic mood swings with frequent tears or outbursts.
                        
                        </Text>
                    </article>

                    <article>
                        <Text noOfLines={[1, 2, 3]} className='highlighted'>
                            <Mark bg='black' color="white"  fontFamily='NewYork' px='8' py='5' borderRadius='6px'> 
                                The worst part?
                            </Mark>
                        </Text>
                    </article>

                    {/* maxWidth:'400px' */}
                        <img src={menopause} alt='Menopausal Lady' style={{textAlign:'center'}}/>

                    <article>
                        <Text noOfLines={[1, 2, 3]}>
                        The way people start reacting to this outburst, responding like they think we’re going crazy.
                        Honestly, we are not going crazy… It's just menopause!
                        </Text>
                    </article>

                    <article>
                        <Text noOfLines={[1, 2, 3]}>
                        Menopause is a transitional period when our bodies start to wind down on our reproductive abilities.
                        
                        </Text>
                    </article>

                    <article>
                        <Text noOfLines={[1, 2, 3]}>
                        And it’s no fun ride. All the mood swings, hot flashes, night sweats, insomnia, joint pains, and the never-ending
                         of problems. Feels like we have a lot to deal with, by ourselves.
                        
                        </Text>
                    </article>
                
                    <article>
                        <Text noOfLines={[1, 2, 3]} className='highlighted'>
                            <Mark bg='black' color="white"  fontFamily='NewYork' px='8' py='5' borderRadius='6px'> 
                                But...
                            </Mark>
                        </Text>
                    </article>

                    <article>
                        <Text noOfLines={[1, 2, 3]}>
                        Understanding and accepting these symptoms can help us simplify the process of solving them (as promised,
                        asy as 1, 2, 3)!
                        </Text>
                    </article>

                    <article>
                        <Text noOfLines={[1, 2, 3]}>
                        Let us start with understanding the 3 stages of Menopause:
                        
                        </Text>
                    </article>

                    <article>
                        <ul>
                            <li>Perimenopause or Premenopause</li>
                            <li>Menopause</li>
                            <li>Postmenopause</li>
                        </ul>
                    </article>
                    <br/><br/><br/><br/>
                    <hr/>
            </section>
        )
    }

export function Sect2(){
    return (
        <section id="sect2" className='text sects'>
        <h2><u>Premenopause</u></h2>
        <span><Button colorScheme='blue' onClick={toTop} variant='outline'>Back To Top</Button></span>
            <article>
                <Text noOfLines={[1, 2, 3]}>
                    Perimenopause or Premenopause can begin several years before menopause. This could last between a few
                    months to about 10 years. However, on average it lasts about 4 years.
                </Text>
            </article>

            <article>
                <Text noOfLines={[1, 2, 3]} className='highlighted'>
                    <Mark bg='black' color="white"  fontFamily='NewYork' px='8' py='5' borderRadius='6px'> 
                    What happens?
                    </Mark>
                </Text>
            </article>

            <article>
                <h3>Ovaries start to gradually lower estrogen production</h3>
                <Text noOfLines={[1, 2, 3]}>
                    This is a natural process of growing older and usually starts around the age of 40. In some cases, it could start as
                    early as when women are in their 30s.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                    This could mean a reduction in our fertility rate, therefore, women looking to start a family should try and utilize
                    every open opportunity with their partner!
                </Text>
            </article>

            <article>
                <h3>Changes in the menstrual/period cycle</h3>
                <Text noOfLines={[1, 2, 3]}>
                The horror stories begin with the change in duration of our menstrual cycle- there could be longer gaps between
                periods or spotting between 2 cycles.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                Like, the frustration of not knowing when you will get your period next is not enough; the flow would differ too,
                making it heavier or lighter over time.
                </Text>
            </article>

            <article>
                <h3>Intensified PMS (premenstrual syndrome)</h3>
                <Text noOfLines={[1, 2, 3]}>
                    Drastic and frequent mood swings are the most common signals, along with increased insomnia or hot flashes.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                    This could increase our irritability level, losing our energy levels; getting tired even after sitting at work the entire
                    day or taking longer weekend naps to recover from our workweek would be common.
                </Text>
            </article>    
            <hr/>              
        </section>
    )
}

    export function Sect3(){
        return (
            <section id="sect3" className='text sects'>
                <h2><u>Menopause</u></h2>
                <span><Button colorScheme='blue' onClick={toTop} variant='outline'>Back To Top</Button></span>
                    <article>
                        <Text noOfLines={[1, 2, 3]}>
                            The official menopause stage begins 12 months after the last menstrual period (bleeding).
                        </Text>
                    </article> 
                     
                    <article>
                        <Text noOfLines={[1, 2, 3]} className='highlighted'>
                                <Mark bg='black' color="white"  fontFamily='NewYork' px='8' py='5' borderRadius='6px'> 
                                What happens?
                                </Mark>
                        </Text>
                    </article> 

                    <article>
                        <h3>Ovaries stop releasing eggs</h3>
                        <Text noOfLines={[1, 2, 3]}>
                            This means there would be minimal production of estrogen.
                        </Text>
                        <Text noOfLines={[1, 2, 3]}>
                            At this stage, getting pregnant could be significantly harder. Hence, we notice the use of hormonal therapy or IVF
                            for childbirth.
                        </Text>
                        <Text noOfLines={[1, 2, 3]}>
                            We start feeling “low”, with the constant need to cuddle in bed and watch Netflix instead of going out and getting
                            drinks with our girlfriends.
                        </Text>
                    </article>

                    <article>
                    <h3>Intensified hot flashes and night sweats</h3>
                        <Text noOfLines={[1, 2, 3]}>
                            Waking up in the middle of the night, aggressively throwing our blanket away or turning your fan on max even
                            though the aircon is on full blast.                        
                        </Text>
                        <Text noOfLines={[1, 2, 3]}>
                            Our body starts to feel warm or hot suddenly, with flushed red skin and increased heart rate; followed by
                            suddenly feeling cold.
                        </Text>
                    </article> 

                    <article>
                    <h3>Significant physical changes</h3>
                        <Text noOfLines={[1, 2, 3]}>
                            The concept of “a minute on your lip, a lifetime on your hip” comes to reality. Eating one slice of cake for dinner
                            could increase weight around our waist and abdominal region, with a reduction in our metabolic rate."                        
                        </Text>
                        <Text noOfLines={[1, 2, 3]}>
                            It is also common to notice our hair and skin becoming drier and thinner; no amount of conditioner and lotion
                            seem to absolutely solve this problem.
                        </Text>
                    </article> 

                        <a rel='noopener noreferrer' target='_blank'className='ad' title='Click to view our menopause remedy used by over a million women worldwide' href='https://www.betterbody.co/pages/pp-provitalize-m'>
                            <Highlight query={['say goodbye']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100', fontWeight:'bold' }}
                            >
                                Say goodbye to unwanted weight gain due to menopause.
                            </Highlight>
                        </a>
                        <a rel='noopener noreferrer' target='_blank' title='Click to view our menopause remedy used by over a million women worldwide' href="https://www.betterbody.co/pages/pp-provitalize-m">
                            <LazyLoad once >
                                <img src={ppm} alt='Visit https://www.betterbody.co/pages/pp-provitalize-m for our menopause symptoms remedy.' style={{width:'100%', margin:'16px auto'}}/>
                            </LazyLoad>
                        </a>
                        <hr/>
            </section>
        )
    }

    export function Sect4(){
        return (
            <section id="sect4" className='text sects'>
                <h2><u>Postmenopause</u></h2>
                <span><Button colorScheme='blue' onClick={toTop} variant='outline'>Back To Top</Button></span>

                <article>
                <Text noOfLines={[1, 2, 3]}>
                    Yes, the troubles don’t end right at menopause. It is the stage where most of the severe menopausal symptoms
                    decrease but it comes with additional side effects.
                </Text>
                </article>

                <article>
                    <Text noOfLines={[1, 2, 3]} className='highlighted'>
                        <Mark bg='black' color="white"  fontFamily='NewYork' px='8' py='5' borderRadius='6px'> 
                        What happens?
                        </Mark>
                    </Text>
                </article> 

                <article>
                    <h3>Increase in Follicle Stimulating Hormones (FSH)</h3>
                    <Text noOfLines={[1, 2, 3]}>
                        This increases dramatically as our ovaries shut down and drastically lower the level of estrogen in our body.
                    </Text>
                    <Text noOfLines={[1, 2, 3]}>
                        By this point, we started noticing a lowered energy level - sleeping in by 7/8 P.M. after work is a norm.
                    </Text>
                </article>

                <article>
                    <h3>Higher risk of certain health conditions</h3>
                    <Text noOfLines={[1, 2, 3]}>
                        Some of the common health problems that occur during postmenopause are diabetes, joint pains, osteoporosis,
                        cholesterol and heart disease.
                    </Text>
                    <Text noOfLines={[1, 2, 3]}>
                        This could be an alarming phase, where every visit to the doctor is like drawing a lottery ticket- we need to
                        maintain a healthy lifestyle to combat such possibilities.
                    </Text>
                </article>

                <article>
                    <h3>Difficulty concentrating and memory lapses (often temporary)</h3>
                    <Text noOfLines={[1, 2, 3]}>
                        Forgetting your car keys, deadlines seem to increase over time. However, these are temporary symptoms of
                        postmenopause.
                    </Text>
                    <Text noOfLines={[1, 2, 3]}>
                        We face a reduction in brain-derived neurotrophic factors which could also cause depression and anxiety.
                        Now we have identified the 3 stages of Menopause.
                    </Text>
                </article>

                <article>
                    <Text noOfLines={[1, 2, 3]}>
                        Understanding the 3 most common symptoms amongst women is vital, allowing us to solve or reduce these
                        problems.
                    </Text>
                    <div style={{textAlign:'center'}}>
                        <h3>Hot Flashes & Night Sweats</h3>
                        <h3>Bloating & Weight Gain</h3>
                        <h3>Joint Pains & Anxiety/Depression</h3>
                    </div>
                </article>

                <article style={{marginTop:'35px'}}>
                    <Text noOfLines={[1, 2, 3]}>
                        Going through menopause by yourself is hard! Especially because it affects our daily life!
                    </Text>
                    <Text noOfLines={[1, 2, 3]}>
                        Symptoms like reduction in metabolic rates and estrogen levels that cause weight gain and increase the size of our abdomen;
                        night sweats and flashes, joint pains that make us feel 30 years older...are just to name a few.
                    </Text>
                </article>

                <article>
                    <Text noOfLines={[1, 2, 3]}>
                        Therefore, we have broken down understanding and solving menopause in 3 easy steps; which can make this
                        journey a little less frustrating!
                    </Text>
                    <Text noOfLines={[1, 2, 3]}>
                        We hope you can see that menopause does not have to be difficult and solving it can be as easy as 1, 2, 3!
                    </Text>
                </article>

                <article>
                    <Text noOfLines={[1, 2, 3]}>
                        We at Better Body Co have a mission to help women around the world have an easier menopausal transition...
                    </Text>
                </article>

                <a rel='noopener noreferrer' target='_blank' className='ad' title='Click to open in a new tab' href='https://www.betterbody.co/pages/pp-provitalize-m'>
                    <Highlight query={['provitalize']}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100', fontWeight:'bold' }}
                    >
                        Solving Menopause Symptoms Is As Easy As 1, 2, 3 with Provitalize
                    </Highlight>
                </a>
                <a href='https://www.betterbody.co/pages/pp-provitalize-m' rel='noopener noreferrer' target='_blank' style={{textAlign:'center'}}>
                    <LazyLoad once >
                        <img src={ppm2} title='Click to open in a new tab'
                            alt='Visit our website to start your symptom-free, menopause life today: https://www.betterbody.co/pages/pp-provitalize-m' 
                            style={{margin:'16px auto', width:'450px'}}
                            />
                    </LazyLoad>
                </a>
                <hr/>
            </section>
        )
    }

export function Sect5(){
    return (
        <section id="sect5" className='text sects'>
            <h2><u>References</u></h2>
            <span><Button colorScheme='blue' onClick={toTop} variant='outline'>Back To Top</Button></span>
            <article>
                <ol>
                    <li>
                        Caffeine and menopausal symptoms: what is the association? <br/>
                        <a href='https://www.ncbi.nlm.nih.gov/pubmed/25051286' rel='noopener noreferrer' target='_blank'>(https://www.ncbi.nlm.nih.gov/pubmed/25051286)</a>
                    </li>
                        <br/>
                    <li>
                    Cigarette Smoking, Androgen Levels, and Hot Flushes in Midlife Women <br/>
                        <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2673540/' rel='noopener noreferrer' target='_blank'>(https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2673540/)</a>
                    </li>
                        <br/>
                    <li>
                        Risk factors for menopausal hot flashes. <br/>
                        <a href='https://www.ncbi.nlm.nih.gov/pubmed/8008318' rel='noopener noreferrer' target='_blank'>(https://www.ncbi.nlm.nih.gov/pubmed/8008318)</a>
                    </li>
                </ol>
                </article>
                <hr/>
            </section>
    )
}

    export function Sect6(){
        return (
            <section id="sect6" className='text sects'>
                <h2><u>Disclaimer</u></h2>
                <span><Button colorScheme='blue' onClick={toTop} variant='outline'>Back To Top</Button></span>
                <article>
                *THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS
                PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.
                </article>

                <article>
                USERS' REVIEWS REFLECT THE OPINIONS OF THE INDIVIDUAL USER, NOT THE COMPANY.
                INDIVIDUALS’ EXPERIENCES MAY VARY. USERS’ COMMENTS ABOUT THE BENEFITS ATTRIBUTE TO
                BETTER BODY CO’S PRODUCTS AND DO NOT NECESSARILY REFLECT THE VIEWS OF THE COMPANY.
                </article>

                <article>
                THE RESULTS MAY VARY FROM PERSON TO PERSON.
                </article>
            </section>
        )
    }