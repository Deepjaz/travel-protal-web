import React from 'react'

const FareRules = (props) => {
    
  return (
    <>
      <div className="commonOverlay ">
        
        <span aria-hidden="true" className="close-icon"  onClick={props.onClose}>&times;</span>
    <div className="rtaFareRules-overlay">
        <p className="appendBottom25 fontSize20 boldFont" >Fare rules</p>
        <div className="appendBottom15">
            <nav className="nav nav-tabs" role="tablist"><a href="#" 
                    className="nav-item nav-link active">Cancellation Charges</a><a href="#" 
                  className="nav-item nav-link">Date change charges</a></nav>
            <div className="tab-content">
                <div role="tabpanel" aria-hidden="false" className="fade rtaFareRules-content tab-pane active show">
                    <div>
                        <div className="accordion">
                            <div className="card">
                                <div className="card-header">
                                    <div className="makeFlex spaceBetween"><span className="makeFlex perfectCenter"><span
                                                className="icon30 bgProperties appendRight10 boldFont"
                                               ></span>Chandigarh-Hyderabad<span
                                                className="fontSize12 lightFont darkText appendLeft5">(via stop 1 - BLR
                                                )</span></span><button variant="link" type="button"></button></div>
                                </div>
                                <div className="collapse show">
                                    <div className="card-body">
                                        <div className="flightDetails darkText fontSize12 appendBottom12">
                                            <div className="DateChangeInfo">
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="fontSize14 boldFont blackText">Time frame</p>
                                                    <p>(From Scheduled flight departure)</p>
                                                </div>
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="fontSize14 boldFont blackText">Airline Fee + MMT Fee</p>
                                                    <p>(Per passenger)</p>
                                                </div>
                                            </div>
                                            <div className="DateChangeInfo">
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="appendBottom3">0 hours to 2 hours*</p>
                                                </div>
                                                <div className="flightDetailsInfoRight">
                                                    <p>ADULT : <b>Non Refundable</b><br/></p>
                                                </div>
                                            </div>
                                            <div className="DateChangeInfo">
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="appendBottom3">2 hours to 3 days*</p>
                                                </div>
                                                <div className="flightDetailsInfoRight">
                                                    <p>ADULT : <b>₹ 3,500 + ₹ 300</b><br/></p>
                                                </div>
                                            </div>
                                            <div className="DateChangeInfo">
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="appendBottom3">3 days to 365 days*</p>
                                                </div>
                                                <div className="flightDetailsInfoRight">
                                                    <p>ADULT : <b>₹ 3,000 + ₹ 300</b><br/></p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="darkText fontSize12 appendBottom12 appendLeft10 appendTop10">*From the
                                            Date of Departure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="infoStrip appendTop15 appendBottom15"><b>*Important:</b> The airline fee is
                            indicative. MakeMyTrip does not guarantee the accuracy of this information. All fees
                            mentioned are per passenger. </div>
                    </div>
                </div>
                <div role="tabpanel" aria-hidden="true" className="fade rtaFareRules-content tab-pane">
                    <div>
                        <div className="accordion">
                            <div className="card">
                                <div className="card-header">
                                    <div className="makeFlex spaceBetween"><span className="makeFlex perfectCenter"><span
                                                className="icon30 bgProperties appendRight10 boldFont"
                                               ></span>Chandigarh-Hyderabad<span
                                                className="fontSize12 lightFont darkText appendLeft5">(via stop 1 - BLR
                                                )</span></span><button variant="link" type="button"></button></div>
                                </div>
                                <div className="collapse show">
                                    <div className="card-body">
                                        <div className="flightDetails darkText fontSize12 appendBottom12">
                                            <div className="DateChangeInfo">
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="fontSize14 boldFont blackText">Time frame</p>
                                                    <p>(From Scheduled flight departure)</p>
                                                </div>
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="fontSize14 boldFont blackText">Airline Fee + MMT Fee +
                                                        Fare difference</p>
                                                    <p>(Per passenger)</p>
                                                </div>
                                            </div>
                                            <div className="DateChangeInfo">
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="appendBottom3">0 hours to 2 hours*</p>
                                                </div>
                                                <div className="flightDetailsInfoRight">
                                                    <p>ADULT : <b>Non Changeable</b><br/></p>
                                                </div>
                                            </div>
                                            <div className="DateChangeInfo">
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="appendBottom3">2 hours to 3 days*</p>
                                                </div>
                                                <div className="flightDetailsInfoRight">
                                                    <p>ADULT : <b>₹ 3,250 + ₹ 300 + Fare difference</b><br/></p>
                                                </div>
                                            </div>
                                            <div className="DateChangeInfo">
                                                <div className="flightDetailsInfoLeft">
                                                    <p className="appendBottom3">3 days to 365 days*</p>
                                                </div>
                                                <div className="flightDetailsInfoRight">
                                                    <p>ADULT : <b>₹ 2,750 + ₹ 300 + Fare difference</b><br/></p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="darkText fontSize12 appendBottom12 appendLeft10 appendTop10">*From the
                                            Date of Departure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="infoStrip appendTop15 appendBottom15"><b>*Important:</b> The airline fee is
                            indicative. MakeMyTrip does not guarantee the accuracy of this information. All fees
                            mentioned are per passenger. Date change charges are applicable only on selecting the same
                            airline on a new date. The difference in fares between the old and the new booking will also
                            be payable by the user.<br/>Please refer to the Date Change Charges section above for details
                            on the number of allowed free date changes, if applicable<br/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default FareRules
