import React, { Component } from 'react'
import "./Preloader.css"

export class Preloader extends Component {
    render() {
        return (
            <div className="loader_body">

                <svg width="380" height="380" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <line x1="59.9833" y1="140.333" x2="219.978" y2="139" stroke="#000" stroke-width="4" />
                        <circle cx="60" cy="140" r="5" fill="#000" />
                        <circle cx="220" cy="139" r="5" fill="#000" />
                    </g>
                    <path class="circle" d="M109.957 122.655L140 105.309L170.043 122.655V157.345L140 174.691L109.957 157.345V122.655Z" stroke="#000" stroke-width="4" />
                    <circle class="circle" cx="140" cy="140" r="13" stroke="#f5d77b" stroke-width="4" />
                    <circle class="circle" cx="110" cy="192" r="13" stroke="#f7a78f" stroke-width="4" />
                    <circle class="circle circle_s" cx="85" cy="232" r="8" stroke="#82c7c5" stroke-width="4" />
                    <circle class="circle" cx="170" cy="88" r="13" stroke="#82c7c5" stroke-width="4" />
                    <circle class="circle circle_s" cx="110" cy="192" r="5" fill="#f7a78f" />
                    <circle class="circle circle_s" cx="185" cy="61" r="5" fill="red" />
                </svg>


                {/* <svg class="loader" viewBox="0 0 100 100">

                    <g class="points">
                        <circle class="ciw" cx="50" cy="50" r="50" fill="#fff" />
                        <circle class="ci2" cx="5" cy="50" r="4" />
                        <circle class="ci1" cx="95" cy="50" r="4" />
                    </g>
                </svg> */}

            </div>
        )
    }
}

export default Preloader
