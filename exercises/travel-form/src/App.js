import React, {Component} from "react"
// import Checkbox from "./Checkbox"
class App extends  Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "N/A",
            destination: "default",
            diet: []
        }
        this.submit = this.submit.bind(this);
        this.input = this.input.bind(this);
        // this.isTrue = this.isTrue.bind(this);
    }



    submit(e) {
        e.preventDefault();
        alert(`First Name: ${this.state.firstName}\n` +
            `Last Name: ${this.state.lastName}\n` +
        `Age: ${this.state.age}\n` +
        `Gender: ${this.state.gender}\n` +
        `Destination: ${this.state.destination}\n` +
        `Dietary: ${this.state.diet}`)
    }

    input(e) {
        const target = e.target;
        // const value = target.type === "checkbox" ? this.state.diet.push(target.title).toString() : target.value
        const value = target.type === "checkbox" ? target.checked : target.value;
        if (value === true) {
            this.setState(prevState => {
            prevState.diet.push(target.title)
                return {diet: prevState.diet}
            })
        } else {
            this.setState(prevState => {
            prevState.diet.push(prevState.diet.filter((item, i) => {
                    if (item !== target.title) {
                    return item
                } else {
                    this.setState(prevState => {
                        {diet: prevState.diet.slice(i,1)}
                    })
                }
                })
            )
                return {diet: prevState.diet}

            })
        }

        this.setState({
            [e.target.name]: value
        })
    }

    // isTrue(e) {
    //     if (e.target.checked === true) {
    //         this.input(e)
    //         console.log("working")
    //     } else {
    //         this.setState(prevState => {
    //             return {diet : prevState.diet}
    //         })
    //     }
    // }


    render() {
        const style = {
            display: "block"
        }
        return (

            <form  onComplete={this.submit} style = {style}>
                First Name: <input name="firstName" onChange={this.input} style={style}/>
                Last Name: <input name = "lastName" onChange={this.input} style={style}/>
                Age: <input name="age" type="number" onChange={this.input} style={style} min="1"/>
                Gender:  <input name="gender" type="radio"  value="Male"  onChange={this.input} style={style}/>Male <input name ="gender"  value = "Female"  onChange={this.input} type="radio" style={style}/> Female   <input name="gender" type="radio" onChange={this.input} value = "N/A" style={style}/> Prefer Not to Say <br/>
                <br/>
                Destination: <br/>
                <select name="destination"   onChange={this.input}>
                    <option value="default" >Please Select a Country</option>
                    <option value="USA">USA </option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                </select>
                <br/>
                Dietary Restrictions: <br/>
                Vegan: <input id="1" onChange={this.input} title="Vegan" type ="checkbox"/> <br/>
                Kosher: <input id="2" onChange={this.input} title=" Kosher" type="checkbox"/><br/>
                Halal: <input id="3" onChange={this.input} title=" Halal" type="checkbox"/><br/>
                <button onClick={this.submit}>Submit</button>
            </form>

        )
    }

}









export default App
