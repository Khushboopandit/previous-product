import React from 'react';


class Product extends React.Component{

    render(){

        return (
            <div className="container sideSpacing" style={{marginTop: "-70px"}}>
            <div className="row">
            {/* {data.map((item,i)=>{
                return ( */}
                <div className="col-lg-4 col-md-4 col-sm-12 rounded">
                    <div className="card p-4">
                    <div className="card-body">
                        <p className="card-text">Product</p>
                        <p className="text-secondary"><small>}</small></p>
                        <p><small className="text-secondary"></small></p>
                        <p className="">Goal:<span className="text-secondary pl-2"><small></small></span></p>
                        <div className="pl-3 pt-1 pb-1 text-primary fontFamilyForGoal" style={{borderRadius:"50px",backgroundColor:"rgb(238, 238, 239)"}}>
                            <span className="text-primary">Goal Achieved</span>
                            <p className="float-right pr-2">%</p>
                        </div>
                        <hr></hr>
                        <span>result</span>
                        <p className="text-secondary float-right">Good</p>
                        <div className="progress decreasingHeight">
                            <div className="progress-bar bg-success" style={{width:"40%"}}></div>
                            <div className="progress-bar bg-warning" style={{width:"10%"}}></div>
                            <div className="progress-bar bg-danger" style={{width:"20%"}}></div>
                        </div>
                        <hr></hr>
                        <p>funding: <span className="pl-2">$1200</span>
                        </p>
                    </div>
                    </div>
            </div>
            {/* )})} */}
            </div>
            </div>
        );
    }
}

export default Product;
