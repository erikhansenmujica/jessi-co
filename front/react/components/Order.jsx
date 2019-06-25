import React from "react";

const style = {
  title: {
    textAlign: "center",
    fontSize: "56px"
  }
};

export default ({ order }) => {
   
  
  return (
    <div className="container"  >
        <h1 style={style.title}>Lista de Ordenes</h1>
      {order &&
        order.map(order => (
            <div className="card container alert alert-secondary" key={order.id}>
{            console.log(order.products, 'soy 2')
}            <div className="card-body">
              <h5 className="card-title" />
              <h6 className="card-subtitle mb-2 text-muted">
                {order.products &&
                  order.products.map(name =>{
                    return ( 
                        <div key={name}>
                            <h3>{name.name}</h3>
                            <p>{name.price}</p>
                        </div>
                     
                    )
                })}
              </h6>
              <p className="card-text">{order.status}</p>
              <p className="card-text">{order.createdAt}</p>

              <a href="#" className="card-link">
                {order.status}
              </a>
            </div>
          </div> 
        ))}
    </div> 
  );
};
