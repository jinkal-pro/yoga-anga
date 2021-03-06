import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Media } from '../lib/Media';
import Link from 'next/link';
import Image from 'next/image';
import SiteWrapper from '../components/SiteWrapper';

const Home = () => {
  return (
    <SiteWrapper title='Yoga Anga' description='This Is Yoga Anga'>
      <Media greaterThanOrEqual='customSizeFormobile'>
        <section className='header' id='home'>
          <div className='text-box'>
            <h1>YOGA ANGA</h1>
            <p style={{ lineHeight: '2' }}>
              Welcome to Yoga Anga, where we invite you to explore and deepen
              your yoga practice, discover your own magic, heal, recharge,
              relax, learn and thrive! We’re dedicated to making yoga available
              to everyone regardless of their size, shape, or bank accounts.
              Join our positive, diverse community today.
            </p>
            <Link href='/services'>
              <a>
                <Button basic inverted color='teal' size='large'>
                  Services
                </Button>
              </a>
            </Link>
          </div>
        </section>
        <section className='about commonWidth' id='aboutUs'>
          <div className='about-cols'>
            <div className='about-rows'>
              <div className='aboutItem'>
                <h1>About Us</h1>
                <p style={{ lineHeight: '2em', textAlign: 'left' }}>
                  In today’s fast-paced world, our lifestyle hampers our body’s
                  well-being by accumulating toxins. This results in creation of
                  stress, diseases and illnesses, which deteriorates one’s
                  health. This is where the Yoga Anga comes into effect and has
                  proven to be important for our body and mind. Yoga Anga is a
                  sacred haven for everyone who wants to embark on a life
                  changing journey. We welcome all students and offer a variety
                  of yoga, meditations, training, courses, workshops and other
                  healing modalities to support and deepen your practice. Yoga
                  Anga offers many physical and mental health and wellness
                  programs, with a curriculum designed to meet the needs of
                  everyone.
                </p>
              </div>
              <div className='aboutItem'>
                <Image
                  src='/dashboardImage1.jpeg'
                  width='450px'
                  height='360px'
                  alt='aboutUs'
                />
              </div>
            </div>
            <div className='about-rows' style={{ marginTop: '50px' }}>
              <div className='aboutItem'>
                <Image
                  src='/dashboardImage2.jpeg'
                  width='450px'
                  height='360px'
                  alt='logo'
                />
              </div>
              <div>
                <h1>Our Purpose</h1>
                <p style={{ lineHeight: '2em', textAlign: 'left' }}>
                  To offer inclusive wellbeing classes for real people, wherever
                  and whenever, with live and online yoga classes We provide
                  services at your Home, Garden, Bunglow, Hospitals, Health
                  club, GYM, Society & Companies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Media>
      <Media lessThan='customSizeFormobile'>
        <section className='header' id='home'>
          <div className='text-box'>
            <h1>YOGA ANGA</h1>
            <p style={{ lineHeight: '2' }}>
              Welcome to Yoga Anga, where we invite you to explore and deepen
              your yoga practice, discover your own magic, heal, recharge,
              relax, learn and thrive! We’re dedicated to making yoga available
              to everyone regardless of their size, shape, or bank accounts.
              Join our positive, diverse community today.
            </p>
            <Link href='/services'>
              <a>
                <Button basic inverted color='teal' size='large'>
                  Services
                </Button>
              </a>
            </Link>
          </div>
        </section>
        <div className='center' style={{ marginTop: '100px' }}>
          <Grid divided='vertically'>
            <Grid.Row columns={1}>
              <Grid.Column>
                <h1 style={{ textAlign: 'center' }}>About Us</h1>
                <p style={{ lineHeight: '2em', textAlign: 'left' }}>
                  In today’s fast-paced world, our lifestyle hampers our body’s
                  well-being by accumulating toxins. This results in creation of
                  stress, diseases and illnesses, which deteriorates one’s
                  health. This is where the Yoga Anga comes into effect and has
                  proven to be important for our body and mind. Yoga Anga is a
                  sacred haven for everyone who wants to embark on a life
                  changing journey. We welcome all students and offer a variety
                  of yoga, meditations, training, courses, workshops and other
                  healing modalities to support and deepen your practice. Yoga
                  Anga offers many physical and mental health and wellness
                  programs, with a curriculum designed to meet the needs of
                  everyone.
                </p>
              </Grid.Column>
              <Grid.Column>
                <img
                  src='/dashboardImage1.jpeg'
                  style={{ width: 'inherit' }}
                  alt='aboutUs'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid divided='vertically'>
            <Grid.Row columns={1}>
              <Grid.Column>
                <h1 style={{ textAlign: 'center' }}>Our Purpose</h1>
                <p style={{ lineHeight: '2em', textAlign: 'left' }}>
                  To offer inclusive wellbeing classes for real people, wherever
                  and whenever, with live and online yoga classes We provide
                  services at your Home, Garden, Bunglow, Hospitals, Health
                  club, GYM, Society & Companies.
                </p>
              </Grid.Column>
              <Grid.Column>
                <img
                  src='/dashboardImage2.jpeg'
                  style={{ width: 'inherit' }}
                  alt='aboutUs'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Media>
    </SiteWrapper>
  );
};

export default Home;
