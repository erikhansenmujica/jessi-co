import React from "react";

 
export default (props)=>{
    return (
        <div>
        <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={props.handleSubmit}>
            <div class="modal-body mx-3">
        
              <div class="md-form mb-5">
                <i class="fas fa-envelope prefix grey-text"></i>
                <input type="email" id="defaultForm-email" placeholder="Your email" class="form-control validate" onChange= {props.handleChange}/>
              </div>
      
              <div class="md-form mb-4">
                <i class="fas fa-lock prefix grey-text"></i>
                <input type="password" id="defaultForm-pass" placeholder="Your password" class="form-control validate"onChange= {props.handleChange}/>
              </div>
      
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button type="submit" class="btn btn-default" style={{backgroundColor:"#113692"}}>Login</button>
            </div>
            </form>
          </div>
        </div>
      </div>
      
       
    </div>
    );
  }
