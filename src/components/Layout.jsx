import React from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
export default ({ children }) => {
    return (
        <section className="hero is-primary is-fullheight">
            {
                //<!-- Hero head: will stick at the top -->
            }
            <div className="hero-head">
                <Header />
            </div>

            {
                //<!-- Hero content: will be in the middle -->
            }

            <div className="hero-body">
                <div className="container">{children}</div>
            </div>

            {
                //</div><!-- Hero footer: will stick at the bottom -->
            }
            <div className="hero-foot">
                <div className="container">
                    <Footer />
                </div>
            </div>
        </section>
    );
};
