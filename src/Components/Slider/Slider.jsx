import React from 'react'
import { Container,ContainerContent,ImageHeroParamour, ImageHeroFederal, ImageHeroSeraph, ImageHeroTrinity, ContentSliderParamour, Btn, Text, Title } from './style'
import {SwiperSlide, Swiper} from 'swiper/react'
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Paramour from './../../assets/home/desktop/image-hero-paramour.jpg'
import Seraph from './../../assets/home/desktop/image-hero-seraph.jpg'
import Federal from './../../assets/home/desktop/image-hero-federal.jpg'
import Trinity from './../../assets/home/desktop/image-hero-trinity.jpg'

const Slider = () => {
  return (
    <Container>
        <ContainerContent>
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={1400}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <ImageHeroParamour src={Paramour}/>
                    <ContentSliderParamour>
                        <Title>Project Paramour</Title>
                        <Text>Project made for an art museum near Southwest London. Project Paramour is 
                        a statement of bold, modern architecture.</Text>
                        <Btn>See Our Portfolio</Btn>
                    </ContentSliderParamour>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageHeroSeraph src={Seraph}/>
                    <ContentSliderParamour>
                        <Title>Seraph Station</Title>
                        <Text>The Seraph Station project challenged us to design a unique station that would 
                        transport people through time. The result is a fresh and futuristic model 
                        inspired by space stations.</Text>
                        <Btn>See Our Portfolio</Btn>
                    </ContentSliderParamour>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageHeroFederal src={Federal}/>
                    <ContentSliderParamour>
                        <Title>Federal II Tower</Title>
                        <Text>A sequel theme project for a tower originally built in the 1800s. We achieved 
                        this with a striking look of brutal minimalism with modern touches.</Text>
                        <Btn>See Our Portfolio</Btn>
                    </ContentSliderParamour>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageHeroTrinity src={Trinity}/>
                    <ContentSliderParamour>
                        <Title>Trinity Bank Tower</Title>
                        <Text>Trinity Bank challenged us to make a concept for a 84 story building located 
                            in the middle of a city with a high earthquake frequency. For this project we 
                            used curves to blend design and stability to meet our objectives.</Text>
                        <Btn>See Our Portfolio</Btn>
                    </ContentSliderParamour>
                </SwiperSlide>
            </Swiper>
        </ContainerContent>
    </Container>
  )
}

export default Slider