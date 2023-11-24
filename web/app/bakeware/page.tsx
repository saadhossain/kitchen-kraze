import React from 'react'
import { metadata } from '../layout'
import { AppName } from '../config/config'

const Bakeware = () => {
  metadata.title= `Bakeware | ${AppName}`;
  metadata.description = `Bakeware | Find Everything you need for Bakeware.`
  return (
    <div>Bakeware</div>
  )
}

export default Bakeware