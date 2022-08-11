import Header from './Header/Header';
import Hero from './Hero/Hero';
import Section1 from './Section1/Section1';

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
    </div>
  );
};
