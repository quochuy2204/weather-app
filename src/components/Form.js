import React from "react";
import App from "../App";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="cityA" placeholder="City..."/>
        <input type="text" name="countryA" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>

)

export default Form;