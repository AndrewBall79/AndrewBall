import React from "react";


class Header extends React.Component {

    render() {
        var firstName = "Andrew";
        var lastName = "Ball";
        var someWord = "Web Designer";
        return (
            <header className="App-header">
                <p className="main-title">{`${firstName} ${lastName}`}</p>
                <h3>{someWord}</h3>
            </header>
        )
    }
}

export default Header;