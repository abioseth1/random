const resizedDetections = faceapi.resizeResults(detections, displaySize);
 
faceapi.draw.drawDetections(canvas, resizedDetections);
faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

