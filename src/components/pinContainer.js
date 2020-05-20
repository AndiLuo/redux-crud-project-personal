import React from "react";
import { connect } from "react-redux";
import Pin from "./pin";

const mapStateToProps = (state) => ({
  pins: state.fetchReducer.pins,
});

function PinContainer(props) {
  const { pins } = props;
  let gallery = "";
  gallery = pins.map((pin, idx) => <Pin key={idx} pins={pin} />);
  console.log(gallery);
  return <div>
        {gallery}
        </div>;
}

export default connect(mapStateToProps)(PinContainer);
