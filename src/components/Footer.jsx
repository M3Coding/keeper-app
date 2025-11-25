const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>&copy; {year} Keeper App</p>

        </footer>
    )
}

export default Footer;