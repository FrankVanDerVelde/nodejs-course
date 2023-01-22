import React from "react";

const current_year = new Date().getFullYear();

function Footer() {
    return <footer><p>Copyright © Frenk {current_year}</p></footer>
}

export default Footer;