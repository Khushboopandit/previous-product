import React from 'react';


class Product extends React.Component{
    cardDetails(cards) {
        return cards.map((item, i) => {
            return (
                <div key={i} className="col-lg-4 col-md-4 col-sm-12 rounded">
                    <div className="card p-4">
                    <div className="card-body">
                        <p className="card-text">Product</p>
                        <p className="text-secondary"><small>{item.date}</small></p>
                        <p><small className="text-secondary">{item.pera}</small></p>
                        <p className="">Goal:<span className="text-secondary pl-2"><small>{item.goal_achieved}</small></span></p>
                        <div className="pl-3 pt-1 pb-1 text-primary fontFamilyForGoal">
                            <span className="text-primary">Goal Achieved</span>
                            <p className="float-right pr-2">{item.doler}%</p>
                        </div>
                        <hr></hr>
                        <span>result</span>
                        <p className="text-secondary float-right">Good</p>
                        <div className="progress decreasingHeight">
                            <div className="progress-bar bg-success progressDiv1" ></div>
                            <div className="progress-bar bg-warning progressDiv1" ></div>
                            <div className="progress-bar bg-danger progressDiv1"></div>
                        </div>
                        <hr></hr>
                        <p>funding: <span className="pl-2">$1200</span>
                        </p>
                    </div>
                </div>
            </div>)})
    }
    render(){
        const {cards} =this.props
        console.log(cards)
        return (
            <div className="container sideSpacing">
                <div className="row">
                {this.cardDetails([1,2,3,4,5,5])}
            </div>
        </div>
        );
    }
}

export default Product;
