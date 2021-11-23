import React, { Component } from 'react'
import { SideNav } from '../components/SideNav'

export default class Cities extends Component {
    render() {
        return (
            <div>
                <SideNav />
                <div className="container_cities">
                    <h1>Welcome to Cities</h1>
                </div>
            </div>
        )
    }
}

