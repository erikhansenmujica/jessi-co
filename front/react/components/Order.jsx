import React from "react";

const style = {
  container: {}
};

export default ({ order }) => {
console.log(order, 'orderrrrr')
  return (
    <div>
      {order && 
        order.map(order => 
          <div className="card container alert alert-secondary">
            <div className="card-body">
              <h5 className="card-title" />
              <h6 className="card-subtitle mb-2 text-muted">{order.name}</h6>
              <p className="card-text">
                {order.price}
              </p>
              <p className="card-text">
                {order.createdAt}
              </p>

              <a href="#" className="card-link">
                {order.status}
              </a>
              
            </div>
          </div>
        )}
    </div>
  );
};
