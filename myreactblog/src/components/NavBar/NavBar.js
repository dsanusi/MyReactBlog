import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () =>(
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/article-list">ArticlesList</Link>
            </li>
            <li>
                <Link to="/article">ArticlePage</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar