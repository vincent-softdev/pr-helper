import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-detail">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Learn more about our company and values.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <a href="https://www.linkedin.com" className='social-icons' target="_blank" rel="noopener noreferrer"><LinkedInIcon /><p>LinkedIn</p></a>
                </div>
            </div>
            <div className="footer-bottom">
                © 2023 Your Company Name
            </div>
        </div>
    )
}

export default Footer