import { Text, Mark, Divider, Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import ppm from './assets/ppm.jpg';
import ppm2 from './assets/ppm2.png';
import {Sect1, Sect2, Sect3, Sect4, Sect5, Sect6} from './Sections';

export default function Body(){
    return (
        <main>
            <Sect1 />
            <Sect2 />
            <Sect3 />
            <Sect4 />
            <Sect5 />
            <Sect6 />
        </main>
    )
}