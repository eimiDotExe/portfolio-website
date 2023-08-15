import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: '12b4',
      label: 'Can I use React on a project?',
      content: 'Yes! You can! You can use React on any project you want!'
    },
    {
      id: 'aeg3',
      label: 'Can I use Javascript on a project?',
      content: 'Yes! You can! You can use Javascript on any project you want!'
    },
    {
      id: '4is3',
      label: 'Can I use CSS on a project?',
      content: 'Yes! You can! You can use CSS on any project you want!'
    }
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;