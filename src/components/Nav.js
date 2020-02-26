import React from "react";

const styles = {
    nav: {
        backgroundColor: "#101d41",
        borderBottom: "red 5px solid"
    },
    header: {
        fontSize: "32px",
        color: "white",
        textAlign: "center",
        margin: "10px",
    },
    headerInfo: {
        fontSize: "12px",
        color: "white",
        marginTop: "5px",
        marginBottom: "30px"
    }
}

    function Navbar() {
        return (
            <nav style={styles.nav} className="nav navbar-nav navbar-center">
                <div style={styles.header}>Employee Directory
                <div style={styles.headerInfo}>Click on carrots to filter by heading or use the search box to narrow your results.</div>
                </div>
            </nav>
        );
}

export default Navbar;