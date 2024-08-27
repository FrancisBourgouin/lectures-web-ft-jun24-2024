import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Webcam from "react-webcam"
import "./App.css";
import { createFaceLandmarker, predictWebcam } from "./helpers/mediapipe-helpers";

function App() {
  const [count, setCount] = useState(0);
  const webcamRef = useRef()

  console.log(webcamRef.current)

  const [faceInfo, setFaceInfo] = useState({
    leftEye: 100,
    rightEye: 100,
    mouth: 100,
    rotation:0
  });

  const updatedFaceInfo = output => setFaceInfo({...faceInfo, ...output})

  const onWebcamReady = async () => {
    console.log(webcamRef.current)

    try{
      const faceLandmarker = await createFaceLandmarker()

      predictWebcam(faceLandmarker, webcamRef.current.video, updatedFaceInfo)

    } catch(e){
      console.log("OH NO.")
      console.log(e)
    }
  }

  useEffect(() => {

  })

  // useEffect(() => {
  //   const morphFace = () => {
  //     const newFaceInfo = {
  //       leftEye: 100 * Math.random(),
  //       rightEye: 100 * Math.random(),
  //       mouth: 100 * Math.random(),
  //       // rotation: Math.random() * 100 * (Math.random() > 0.5 ? -1 : 1)
  //     };
  //     setFaceInfo(newFaceInfo)
  //   };

  //   const intervalId = setInterval(morphFace, 700)

  //   return () => clearInterval(intervalId)
  // });

  return (
    <>
      <section className="Face" style={{transform:`rotateY(${faceInfo.rotation}deg)`}}>
        <div
          className="LeftEye"
          style={{ transform: `scale(${faceInfo.leftEye}%)` }}
        ></div>
        <div
          className="RightEye"
          style={{ transform: `scale(${faceInfo.rightEye}%)` }}
        ></div>
        <div className="Nose"></div>
        <div
          className="Mouth"
          style={{
            height: `${faceInfo.mouth}%`,
            marginTop: `${(100 - faceInfo.mouth) / 4}%`,
          }}
        ></div>
      </section>
      <Webcam ref={webcamRef} style={{height:"20vmin"}} onUserMedia={onWebcamReady}/>
    </>
  );
}

export default App;
