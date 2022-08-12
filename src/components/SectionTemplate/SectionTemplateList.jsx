import SectionTemplate from './SectionTemplate';


const SectionTemplateList = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <SectionTemplate
          key={item.url}
          url={item.url}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </>
  );
};

export default SectionTemplateList;
