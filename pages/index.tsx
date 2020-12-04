import react from "react";
import { AddButton, SubtractButton, Wrapper, Header1 } from "../styles/style";
import Head from "next/head";
import Link from "next/link";

const imageDatabase: string[] = [
    "https://i.ibb.co/HFRNx11/Screen-Shot-2020-12-04-at-9-03-38-AM.png",
    "https://i.ibb.co/jf3khCq/Screen-Shot-2020-12-04-at-9-03-47-AM.png",
    "https://i.ibb.co/vYb6cTc/Screen-Shot-2020-12-04-at-9-03-55-AM.png",
    "https://i.ibb.co/KGhg4Jh/Screen-Shot-2020-12-04-at-9-04-07-AM.png",
    "https://i.ibb.co/F88ptnp/Screen-Shot-2020-12-04-at-9-04-16-AM.png",
    "https://i.ibb.co/VJwSYQv/Screen-Shot-2020-12-04-at-9-04-26-AM.png",
    "https://i.ibb.co/tsGYBKh/Screen-Shot-2020-12-04-at-9-04-35-AM.png",
    "https://i.ibb.co/mJdyQxs/Screen-Shot-2020-12-04-at-9-04-46-AM.png",
    "https://i.ibb.co/FXnfP3B/Screen-Shot-2020-12-04-at-9-04-54-AM.png",
    "https://i.ibb.co/728fxPK/Screen-Shot-2020-12-04-at-9-05-02-AM.png",
    "https://i.ibb.co/1qqZLtq/Screen-Shot-2020-12-04-at-9-05-12-AM.png",
    "https://i.ibb.co/fpfZcSj/Screen-Shot-2020-12-04-at-9-05-23-AM.png",
    "https://i.ibb.co/WGxDHBz/Screen-Shot-2020-12-04-at-9-05-35-AM.png",
    "https://i.ibb.co/LhnQjTf/Screen-Shot-2020-12-04-at-9-05-42-AM.png",
    "https://i.ibb.co/85xs77w/Screen-Shot-2020-12-04-at-9-05-50-AM.png",
    "https://i.ibb.co/89KLzZX/Screen-Shot-2020-12-04-at-9-05-59-AM.png",
    "https://i.ibb.co/bXWMH97/Screen-Shot-2020-12-04-at-9-05-59-AM.png",
    "https://i.ibb.co/HpNz0Zz/Screen-Shot-2020-12-04-at-9-06-10-AM.png",
    "https://i.ibb.co/JyZ2LBS/Screen-Shot-2020-12-04-at-9-06-19-AM.png",
    "https://i.ibb.co/8cQFCqK/Screen-Shot-2020-12-04-at-9-06-28-AM.png",
    "https://i.ibb.co/3MJB4LQ/Screen-Shot-2020-12-04-at-9-06-35-AM.png",
    "https://i.ibb.co/MRkCmbV/Screen-Shot-2020-12-04-at-9-06-43-AM.png",
    "https://i.ibb.co/TbT1d8s/Screen-Shot-2020-12-04-at-9-06-50-AM.png",
    "https://i.ibb.co/Wxctzwc/Screen-Shot-2020-12-04-at-9-06-59-AM.png",
    "https://i.ibb.co/tX4Y5St/Screen-Shot-2020-12-04-at-9-07-09-AM.png",
    "https://i.ibb.co/hMW2J4H/Screen-Shot-2020-12-04-at-9-07-21-AM.png",
    "https://i.ibb.co/9ZZ1Nwj/Screen-Shot-2020-12-04-at-9-07-36-AM.png",
    "https://i.ibb.co/pdnvDyY/Screen-Shot-2020-12-04-at-9-07-46-AM.png",
];

const print = (val) => console.log(val); 

class BackgroundImage extends react.Component {
    state = {
        currentImage: 0,
    }

    render(){
        return <div>
            <div style={{
                textAlign: "center"
            }}>
            <Header1>📸 Photographly</Header1>
            </div>
            <Wrapper>
            <Head>
                <title>Photographly</title>
                <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/camera-with-flash_1f4f8.png" />
            </Head>
            <img src={imageDatabase[this.state.currentImage]} />
            <div style={{
                margin: "auto"
            }} >
                <AddButton onClick={() => this.setState({ currentImage: this.state.currentImage- 1 })}>← Previous</AddButton>
            <SubtractButton onClick={() => this.setState({ currentImage: this.state.currentImage+ 1 })}>  Next →  </SubtractButton>
            </div>
        </Wrapper>
        </div>
        
    }
}

export default BackgroundImage;

// <Header1>📸 Photographly</Header1>