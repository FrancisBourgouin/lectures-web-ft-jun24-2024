import vision from "@mediapipe/tasks-vision";
const { FaceLandmarker, FilesetResolver } = vision;

// Before we can use HandLandmarker class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment to
// get everything needed to run.
export async function createFaceLandmarker() {
  try {
    const filesetResolver = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
    );
    const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
        delegate: "GPU",
      },
      outputFaceBlendshapes: true,
      runningMode: "VIDEO",
      numFaces: 1,
    });

    return faceLandmarker;
  } catch (error) {
    console.log("Something went wrong when creating the faceLandmarker");
    console.log(error);

    return null;
  }
}

/********************************************************************
// Demo 2: Continuously grab image from webcam stream and detect it.
********************************************************************/

let lastVideoTime = -1;

export async function predictWebcam(faceLandmarker, video, doSomething) {
  let results = undefined;
  let startTimeMs = performance.now();

  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }
  if (results && results.faceLandmarks && results.faceBlendshapes[0]) {
    // console.log(results)

    const output = {
      leftEye:100 - results.faceBlendshapes[0].categories[9].score * 110,
      rightEye:100 - results.faceBlendshapes[0].categories[10].score * 110,
      mouth:results.faceBlendshapes[0].categories[25].score * 100,
    }
    doSomething(output)
  }

  // Call this function again to keep predicting when the browser is ready.
  if (true) {
    window.requestAnimationFrame(() => predictWebcam(faceLandmarker, video, doSomething));
  }
}