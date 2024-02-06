import { React, Component } from "react";

import axios from "axios";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "manish", pagenumber: 1 },
        { name: "Abimanyu", pagenumber: 2 },
        { name: "Abhijit", pagenumber: 3 },
      ],
    };
  }

  async componentDidMount() {
    const data = { userId: "" };
    // const response = await axios.get(process.env.PAGE_URL + "/lists", data);
    console.log(process.env.PAGE_URL);
  }

  render() {
    return (
      <>
        <div className="container ">
          <ul className=" d-flex">
            {this.state.data.map((page) => (
              <div className="card py-1 my-1 " key={page.pagenumber}>
                <h3 className="text-center text-white">{page.name}</h3>
                <div className="card-body">
                  <p className="text-center text-white">{page.pagenumber}</p>
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
