'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Food3 from "@/app/assets/images/food3.png"; 
import Food4 from "@/app/assets/images/food4.png"; 

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: '1px solid #E5E7EB', // Light gray border
  marginBottom: '16px', // Space between accordions
  borderRadius: '10px', // Rounded corners
  '&:not(:last-child)': {
    marginBottom: '16px',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<CheckCircleOutlineIcon sx={{ fontSize: '24px', color: "#000" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#fff',
  flexDirection: 'row-reverse',
  color: '#000',
  borderRadius: '10px',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(0deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: '#fff',
    
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '0 20px 20px',
  backgroundColor: '#fff',
  borderRadius: '10px'
}));

export default function Faq() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <section>
        <div className="container xl:!max-w-[1210px] relative z-10">
          <Image className='xl:block hidden absolute top-[50%] -left-[18%]' src={Food3} alt="Food3"/>
            <Image className='xl:block hidden absolute top-[10%] -right-[20%]' src={Food4} alt="Food4"/>
          <div>
            <h2  className="main-title text-center mb-[30px]">FAQ’s</h2>
          </div>
          <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography component="span" sx={{ fontSize: '24px', fontWeight: '600' }}>Can I track my order once it's placed?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  sx={{ fontSize: '18px', fontFamilt: 'inter' }}>
                Yes, your order can be tracked once it's confirmed by the restaurant. All details, including the delivery partner's contact information and the restaurant's, will be available on your order status page.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography component="span" sx={{ fontSize: '24px', fontWeight: '600' }}>Are your seat covers airbag compatible?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Yes, your order can be tracked once it's confirmed by the restaurant. All details, including the delivery partner's contact information and the restaurant's, will be available on your order status page.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography component="span" sx={{ fontSize: '24px', fontWeight: '600' }}>Do you offer a warranty?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Yes, your order can be tracked once it's confirmed by the restaurant. All details, including the delivery partner's contact information and the restaurant's, will be available on your order status page.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography component="span" sx={{ fontSize: '24px', fontWeight: '600' }}>What if I'm not satisfied with my purchase?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Yes, your order can be tracked once it's confirmed by the restaurant. All details, including the delivery partner's contact information and the restaurant's, will be available on your order status page.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <Typography component="span" sx={{ fontSize: '24px', fontWeight: '600' }}>Can I install these myself, or do I need to hire someone?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Yes, your order can be tracked once it's confirmed by the restaurant. All details, including the delivery partner's contact information and the restaurant's, will be available on your order status page.
                </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
      </section>
    </>
  );
}
