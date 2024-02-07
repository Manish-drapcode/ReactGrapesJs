import { React, Component } from "react";

import axios from "axios";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      log: false,
    };
  }

  async componentDidMount() {
    const data = { userId: "" };
    // const response = await axios.get(process.env.PAGE_URL + "/lists", data);
    const url = "http://localhost:3003/pages/list";
    const response = await axios.get(url, {
      headers: { authorization: sessionStorage.getItem("token") },
    });
    // console.log(response);
    await this.setState({ data: response.data });
    console.log("response data ", response.data);
    console.log("state data", this.state.data);
    if (this.state.data) {
      console.log("this state data ");
      this.setState({ log: !this.state.log });
    }
  }

  render() {
    return (
      <>
        <div className="container ">
          <ul className=" d-flex">
            {this.state.log &&
              this.state.data.map((page) => (
                <div className="card py-1 my-1 ">
                  <h3 className="text-center text-white">{page.name}</h3>
                  <div className="card-body">
                    <p className="text-center text-white">{page.comments}</p>
                    <div className="d-flex flex-row-reverse">
                      <button className="btn btn-outline-primary text-white    ">
                        delete
                      </button>
                      <button className="btn btn-outline-primary text-white ">
                        details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Lists;
