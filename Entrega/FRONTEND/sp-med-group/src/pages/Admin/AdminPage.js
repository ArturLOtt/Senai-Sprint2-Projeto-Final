import React, { Component } from "react";
import BottonLine from "../../components/Botton/BottomLine";
import TopLine from "../../components/Top/TopLine";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <TopLine />
        <div>
          <h2>Area do Administrador</h2>

          <form>
            <input style={{ border: "solid 1px", borderColor: "blue" }} />
          </form>

          <hr />        

          <h2>Cadastro</h2>

          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="" />
              Usuario
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="" />
              Cliente
            </label>
          </div>
        </div>

        <form>
            <input
              style={{
                border: "solid 1px",
                borderColor: "blue",
                borderRadius: "4px"
              }}
            />
          </form>


        <BottonLine />
      </div>
    
    );
  }
}

export default AdminPage;
