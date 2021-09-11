import React from 'react'

function EditModal() {
    return (
        <>
            <div className="  mb-3">
                          
                            <div className="col-md-12 mt-2">
                                <div className=" mb-3">
                                    <div className="card-body">
                                        <form>
                                            
                                            
                                            <div className="row my-3">
                                                <div className="col-sm-2">
                                                    <label className="font-weight-bolder" for="inputNAme">Name</label>
                                                </div>
                                                <div className="col-sm-10 col-md-8 text-secondary">
                                                    <input type="name" className="form-control" id="inputName" placeholder="Name"/>
                                                </div>
                                            </div>
                                            
                                            <div className="row my-3">
                                                <div className="col-sm-2">
                                                    <label className="font-weight-bolder" for="inputEmail4">Business Name</label>
                                                </div>
                                                <div className="col-sm-10 col-md-8 text-secondary">
                                                    <input type="name" className="form-control" id="inputEmail4" placeholder="Loyana Solution Pvt Ltd"/>
                                                </div>
                                            </div>
                                            
                                            <div className="row my-3">
                                                <div className="col-sm-2">
                                                    <label className="font-weight-bolder" for="inputEmail4">Email</label>
                                                </div>
                                                <div className="col-sm-10 col-md-8 text-secondary">
                                                    <input type="name" className="form-control" id="inputEmail4" placeholder="abc@gmail.com"/>
                                                </div>
                                            </div>
                                            
                                            <div className="row my-3">
                                                <div className="col-sm-2">
                                                    <label className="font-weight-bolder" for="inputNumber">Mobile No.</label>
                                                </div>
                                                <div className="col-sm-10 col-md-8 text-secondary">
                                                    <input type="number" className="form-control" id="inputNumber" placeholder="Valid 10 Digit Number"/>
                                                </div>
                                            </div>
                                            
                                            <div className="row my-3 ">
                                                <div className="col-sm-2">
                                                    <label className="font-weight-bolder" for="inputText">Address</label>
                                                </div>
                                                <div className="col-sm-10 col-md-8 text-secondary">
                                                    <input type="name" className="form-control" id="inputText" placeholder="Loyana Solution, Pimpri, Pune"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default EditModal
