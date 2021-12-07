import React, { useState, useEffect } from 'react'
import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";

export default function AdminDashboard() {

    return (
        <React.Fragment>
            <Navbar />
            <div className="coin-main py-60 ms">
                <div className="container-lg">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            <h4>Create transfer request</h4>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Control Variable</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>

                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Max Payout</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>

                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Initial Debt</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>

                            <div className="mt-3">
                                <button data-bs-toggle="modal" data-bs-target="#amendPopup" type="button"  className="btn-primary">Amend</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Vesting Term</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>

                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Fee</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Minimum Price</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>

                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Max Debt</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex mt-5 justify-content-center">
                        <div className="col-12">
                            <h4>Set Bond Terms </h4>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">set parameters for new bonds</label>
                                <input id="controlVeriable" className="border w-100 mt-1" />
                            </div>

                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">FEE</label>
                                <input id="controlVeriable" className="border w-100 mt-1" />
                            </div>

                            <div className="mt-3">
                                <button className="btn-primary" data-bs-toggle="modal" data-bs-target="#amendPopup">Amend</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">VESTING</label>
                                <input id="controlVeriable" className="border w-100 mt-1" />
                            </div>

                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">DEBT</label>
                                <input id="controlVeriable" className="border w-100 mt-1" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">PAYOUT</label>
                                <input id="controlVeriable" className="border w-100 mt-1" />
                            </div>

                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Input</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex mt-5 justify-content-center">
                        <div className="col-12">
                            <h4>Set Control Variable Adjustment</h4>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Addition</label>
                                <div className="w-100 d-flex">
                                    <div className="custom02">
                                        <input type="radio" id="radio03-01" name="demo03" /><label htmlFor="radio03-01">True</label>
                                    </div>

                                    <div className="custom02" style={{ marginLeft: "20px" }}>
                                        <input type="radio" id="radio03-02" name="demo03" /><label htmlFor="radio03-02">False</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Buffer</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>

                            <div className="mt-3">
                                <button className="btn-gray">Amend</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Increment</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label htmlFor="controlVeriable">Target</label>
                                <input id="controlVeriable" placeholder="23" className="border w-100 mt-1" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <h4>Set Contract For Auto Stake</h4>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label>Staking</label>
                                <div className="form mb-4">
                                    <input placeholder="2972 Westheimer Rd. Santa Ana, Illinois 854 " className="border w-100 mt-1" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="btn-gray">Amend</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <label htmlFor="controlVeriable">Use Helper</label>
                            <div className="w-100 d-flex">
                                <div className="custom02">
                                    <input type="radio" id="radio03-03" name="demo03" /><label htmlFor="radio03-03">True</label>
                                </div>

                                <div className="custom02" style={{ marginLeft: "20px" }}>
                                    <input type="radio" id="radio03-04" name="demo03" /><label htmlFor="radio03-04">False</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <h4>Reddeem Helper</h4>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label>Add Bond Contract</label>
                                <div className="form mb-4">
                                    <input placeholder="2972 Westheimer Rd. Santa Ana, Illinois 854 " className="border w-100 mt-1" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="btn-gray">Amend</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <label htmlFor="controlVeriable">Remove Bond Contract</label>
                            <div className="form mb-4">
                                <input placeholder="23 " className="border w-100 mt-1" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <h4>Staking Distributor</h4>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label>Add Recipient</label>
                                <div className="form mb-4">
                                    <input placeholder="2972 Westheimer Rd. Santa Ana, Illinois 854 " className="border w-100 mt-1" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="btn-gray">Amend</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <label htmlFor="controlVeriable">Reward Rate</label>
                            <div className="form mb-4">
                                <input placeholder="23 " className="border w-100 mt-1" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <h4>Remove Recipient</h4>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label>Index</label>
                                <div className="form mb-4">
                                    <input className="border w-100 mt-1" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="btn-gray">Amend</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <label htmlFor="controlVeriable">Reward Rate</label>
                            <div className="form mb-4">
                                <input className="border w-100 mt-1" />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <h4>Set Adjustment</h4>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <div className="form mb-4">
                                <label>Index</label>
                                <div className="form mb-4">
                                    <input className="border w-100 mt-1" />
                                </div>
                            </div>

                            <div className="form mb-4">
                                <label>Target</label>
                                <div className="form mb-4">
                                    <input className="border w-100 mt-1" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="btn-gray">Amend</button>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <label htmlFor="controlVeriable">Reward Rate</label>
                            <div className="w-100 d-flex">
                                <div className="custom02">
                                    <input type="radio" id="radio03-05" name="demo03" /><label htmlFor="radio03-05">True</label>
                                </div>

                                <div className="custom02" style={{ marginLeft: "20px" }}>
                                    <input type="radio" id="radio03-06" name="demo03" /><label htmlFor="radio03-06">False</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4 mt-3">
                            <label htmlFor="controlVeriable">Rate</label>
                            <div className="form mb-4">
                                <input className="border w-100 mt-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}

            <div class="modal fade" id="amendPopup" tabIndex="-1" aria-labelledby="amendPopup" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body popup-card-container rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">MsDoge Bonding Amendment</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small><b>Cryptoloria APY (%)</b></small></div>
                                    <div><small>360</small></div>
                                 </div>

                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Amend</button>
                                       <div class="closebtn" data-bs-dismiss="modal" aria-label="Close" className="claim-btn-failed color5 py-2 px-4 w-100 text-center"><b>Cancel</b></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         
            <Footer />
        </React.Fragment>
    )
}
