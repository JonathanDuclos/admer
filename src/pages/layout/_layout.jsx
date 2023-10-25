import React from "react";
import PageHeader from "../../components/parts/PageHeader";
import Container from "../../components/parts/Container";

function _layout(){
    return(
        <div className="block h-screen">
            <div className="block">
                <PageHeader text="Admer" />
                <div>
                    <Container/>
                </div>
            </div>
        </div>
    );
}

export default _layout;
