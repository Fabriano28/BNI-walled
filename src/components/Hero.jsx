import profile from '../assets/walled-profile.png';

function Hero() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 d-flex flex-column justify-content-start">
                        <h1><strong>Good Morning, Chelsea</strong></h1>
                        <span>Check all your incoming and outgoing transactions here</span>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <div className='d-flex flex-column align-items-end me-3'>
                            <span><strong>Chelsea Immanuela</strong></span>
                            <span>Personal Account</span>
                        </div>
                        <img src={ profile } alt="" width={ 89 } height={ 89 }/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;