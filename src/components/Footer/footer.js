import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
      <footer className="footer">
        <div className="web-ring" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <a href="https://cs-webring.vercel.app/go?site=https%3A%2F%2Faryankakkar.vercel.app/%2F&nav=prev">←</a>
                <a href="https://cs-webring.vercel.app/">
                    <img
                        src="https://cs-webring.vercel.app/icon.white.svg"
                        alt="CS Webring"
                        style={{ width: "24px", height: "auto", opacity: 0.8 }}
                    />
                </a>
                
                <a href="https://cs-webring.vercel.app/go?site=https%3A%2F%2Faryankakkar.vercel.app/%2F&nav=next">→</a>
            </div>
        © {new Date().getFullYear()} Aryan Kakkar. All rights reserved.
      </footer>
    );
  };
  
  export default Footer;