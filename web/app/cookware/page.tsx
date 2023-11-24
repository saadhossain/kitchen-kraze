import React from 'react'
import { metadata } from '../layout';
import { AppName } from '../config/config';

const Cookware = () => {
  metadata.title= `Cookware | ${AppName}`;
  metadata.description = `Cookware | Find Everything you need for Cookware.`
  return (
    <div>Cookware</div>
  )
}

export default Cookware