import React from "react";

const Jumbotron = () => {
    const jumbotronStyle = {
        backgroundColor: "#e8f1f8",
    };

    return (
        <div className="jumbotron mt-4">
            <div className="container pb-4 rounded" style={jumbotronStyle}>
                <h1 className="display-4 font-weight-bold"><strong>A Warm Welcome!</strong></h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure maiores mollitia sequi doloribus illo vitae repellendus dignissimos quae nobis dolorem aliquam porro, asperiores velit blanditiis voluptatum, accusamus incidunt qui..</p>

                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>
    );
}

export default Jumbotron;
