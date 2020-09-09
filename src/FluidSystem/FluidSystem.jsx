import React from 'react';
import trophy from '../1.png';
import logo from '../logo.png';
import pumpsAvai from '../3.png';
import trophyGiven from '../2.png';
import { staticStrings, bulletPointsHeading, informatroyText, footerData } from '../constants';
import './style.css';

const FluidSystem = () => (
  <div className='fluidSystemWrapper'>
    <div className='trophyHeaderWrap'>
      <div className='logoResponsive'>
        <img src={logo} />
      </div>
      <div className='trophyWrap w-100'>
        <img src={trophy} />
      </div>
      <div className='headerInfoWrap'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <div className='informatoryText textLeft'>
          <div className='heading'>{staticStrings.heading}</div>
        </div>
        <div className='bulletPointsWrap'>
          <ul>
            {
              bulletPointsHeading.map((point) => (
                <li>{point}</li>
              ))
            }
          </ul>
        </div>
        <div className='trophyGiven w-100'>
          <img src={trophyGiven} />
        </div>
        <div className='govtLines textJustify'>
          {staticStrings.govtLines}
          <strong>{staticStrings.awrded}</strong>
          {staticStrings.afterAwardLine}
        </div>
      </div>
    </div>
    <div className='installedOverText'>
      {staticStrings.installedOver}
    </div>
    <div className='pumps'>
      <img src={pumpsAvai} className='pumpsClass' />
    </div>
    <div className='pumpValues'>{staticStrings.pumpVlaues}</div>
    <hr />
    <div className='criFluidSysClass'>{staticStrings.criFluidSys}</div>
    <div className='informatoryText'>
      {
        informatroyText.map((data, index) => (
          <span>
            {`${data.label} `}
            {index != informatroyText.length - 1 && <span style={{ color: 'red' }}> | </span>}
          </span>
        ))
      }
    </div>
    <footer>
      <div className='footerData'>
        {
          footerData.map((data) => (
            <div className='item'>
              <img src={data.icon} className='footerIcons' />
              <span>
                {data.mainLabel}
                {data.subLabel && <strong>{data.subLabel}</strong>}
              </span>
            </div>
          ))
        }
      </div>
    </footer>
  </div>
);

export default FluidSystem;
