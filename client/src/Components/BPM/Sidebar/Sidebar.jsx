import React from 'react';
import  StrartLabel  from "./StartLabel/StartLabel";
import  EndLabel  from "./EndLabel/EndLabel";
import  Email  from "./Email/Email";
import  AndGate  from "./AndGate/AndGate";
import  OrGate  from "./OrGate/OrGate";
import  Database  from "./Database/Database";
import  Subscribe  from "./Subscribe/Subscribe";
import  Publish  from "./Publish/Publish";
import  OutputStream  from "./OutputStream/OutputStream";
import  InputStream  from "./InputStream/InputStream";
import  Process  from "./Process/Process";
import  Container  from "./container";
import  Swimlane  from "./Swimlane";


import  Condition  from "./Condition/Condition";
import  Decision  from "./Decision";
import  Plane  from "./plane";
import  Ship  from "./ship";
import  Kaizen  from "./kaizenBurst";
import  Logistic  from "./logistic";
import  Invenrory  from "./inventory";
import  Fifo  from "./fifo";
import  LoadLeveling  from "./loadLeveling";
import  ERP  from "./MRPERP";
import  Forklift  from "./forklift";
import OutsideOrganization from './OutsideOrganization';
import Merge from './merge';
import LoopLimit from './loopLimit';
import Delay from './delay';
import Connector from './connector';
import Preparation from './preparation';








import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { PreparationNode } from '../nodes';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

export default () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const onDragStart = (event, nodeType) => {
        // console.log(nodeType,"node type");
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return(
        <div className='palette'>
        <span className='palette-header'>Shapes</span>
        {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Basic Shapes</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <aside className='container'>
         <StrartLabel  />
         <EndLabel  />
         <Process  />
         <Decision  />
         <InputStream  />
         <OutputStream  />
         <Container />
         <Merge />
         <LoopLimit />
         <Connector />
         <Delay />
         <Preparation />
       
           </aside>
        </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Data Sources</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <aside className='container'>
           <Database  />
         <Email  />
         <Publish  />
         <Subscribe  />
           </aside>
        </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Logic Operation</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <aside className='container'>
           <AndGate  />
           <OrGate  />
           </aside>
        </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Value Stream Mappings</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <aside className='container'>
           <Plane  />
           <Ship  />
           <Forklift  />
           <ERP />
           <LoadLeveling />
           <Fifo />
           <Invenrory />
           <Logistic />
           <Kaizen />
           <OutsideOrganization />
           <Swimlane />
           </aside>
        </AccordionDetails>
          </Accordion> */}
        </div>
    );

}