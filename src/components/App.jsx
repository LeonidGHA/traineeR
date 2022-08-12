import Header from './Header/Header';
import Hero from './Hero/Hero';
import Section1 from './Section1/Section1';
import SectionPrice from './SectionPrice/SectionPrice';
import Footer from './Footer/Footer';

import SectionTemplateList from './SectionTemplate/SectionTemplateList';
import items from '../database/array.js';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Header />
      <Hero />
      <Section1 />
      <SectionTemplateList items={items} />
      <SectionPrice />
      <Footer />
    </div>
  );
};
