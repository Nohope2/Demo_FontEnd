import React from 'react'
import './assets/header.css'

function Header() {
    return (
        <div>
            <div class="header-main">
                <div class="header-container">
                    <div class="header-logo-container">
                        <div class="header-logo">
                            <img src="https://thumbs.dreamstime.com/b/audiobook-vector-logo-template-abstract-pattern-audiobooks-illustration-icon-126293283.jpg" alt=""></img>
                        </div>
                    </div>
                    <div class="header-content">

                        <div class="nav-bottom">
                            <ul class="nav-main">
                                <li><a href="/">Home</a></li>
                                <li><a href="/wallet">DataText</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;