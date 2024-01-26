import React from "react";

const Footer = () => {

    const footerStyle = {
        backgroundColor: "#33383f",
    };

    return (
        <footer className="text-light text-center py-3" style={footerStyle}>
            <div className="container d-flex justify-content-center align-items-end">
                <p>Copyright &copy; DavidPardoMartinWeb 2024</p>
            </div>
        </footer >
    );
}

export default Footer;
