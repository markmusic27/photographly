import react from "react";
import { AddButton, SubtractButton, } from "../styles/style";

const imageDatabase: string[] = [
    "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png",
    "",
    "",
];

const print = (val) => console.log(val); 

class BackgroundImage extends react.Component {
    state = {
        currentImage: 0,
    }

    render(){
        return <div>
            <img src={imageDatabase[this.state.currentImage]} />
            <AddButton onClick={() => this.setState({ currentImage: this.state.currentImage+ 1 })}/>
            <SubtractButton onClick={() => this.setState({ currentImage: this.state.currentImage- 1 })}/>
        </div>
        
    }
}

export default BackgroundImage;

// this.state.currentImage