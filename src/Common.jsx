import React from 'react';

const Common=(props)=>
{
    return(
        <>
        <section id="header">
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                <div className='row'>

                
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                        <h1>{props.name}<strong className='brand-name'>Ritik Agrawal</strong></h1>
                        <h2 className='my-5'>
                            I am Web Developer.
                        </h2>
                        <div className='mt-3'>
                            <a href='' className='btn-get-started'>{props.butt}</a>
                        </div>
                    </div>

                    <div className='col-md-6 lg-6 order-1 order-lg-2'>
                    
                        <img src={props.imgsrc} 
                        className='img-fluid animated' alt='home img' />
                    </div></div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
};
export default Common;