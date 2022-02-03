import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import click from '../assets/images/click.jpeg'


export const Hero = () => {
    return (
      <div className="container_mapa">
        <div className="container_margen">
          <div className="mapa"></div>
          <div className="col-4 call_a"><h1>The experience begins now</h1></div>
          <Button href="/cities" className="btnGo">go there!</Button> 
        </div>
      </div>
  )
}
