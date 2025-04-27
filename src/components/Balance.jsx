import walledIconPlus from '../assets/walled-icon-plus.png';
import walledIconSend from '../assets/walled-icon-send.png';
import walledIconView from '../assets/walled-icon-view.png';


function Balance () {
    return (
        <>
            <div className="container mb-2">

                <div className="row">
                    <div className="col-auto">
                        <div className="text-bg-primary rounded p-3 m-3 d-flex flex-column justify-content-center align-items-center" style={{ width: '200px', height: '200px' }}>
                            <p>Account No.</p>
                            <h4>100899</h4>
                        </div>
                    </div>

                    <div className="col">
                        <div className="bg-white rounded p-3 m-3 d-flex align-items-center" style={{ height: '200px' }}>
                            <div className="row w-100 align-items-center">
                                <div className="col-6">
                                    <span>Balance</span>
                                    <h3>Rp 10.000.000,00</h3>
                                </div>
                                <div className="col-2">
                                    <img src={walledIconView} alt="" />
                                </div>
                                <div className="col-4 d-flex justify-content-end">
                                    <div className="d-flex gap-2">
                                        <button type="button" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ width: '64px', height: '64px' }}>
                                            <img src={walledIconPlus} alt="" />
                                        </button>
                                        <button type="button" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ width: '64px', height: '64px' }}>
                                            <img src={walledIconSend} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Balance;