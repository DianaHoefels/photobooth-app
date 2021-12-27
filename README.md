# D-ID Face Recognition Gallery
The D-ID Recognition Gallery App lets users upload an image (that contains a face), view the recognized face by coloring it, and then save the **cropped** image to the gallery.

### Spec

#### Backend
* Should contain a simple storage Database for saving the user's images with their bounding boxes
* A nodejs http server with 4 endpoints
    - `POST /detect`
    - `GET /images`
    - `POST /images`
    - `DELETE /images`
* The `/detect` endpoint accepts a file and returns a bounding box array, use some face recognition library (checkout [@tensorflow/tfjs-node](@tensorflow/tfjs-node))

#### Frontend
* Use Reactjs (`create-react-app` is a good starter)
* SPA that follows [this figma](https://www.figma.com/file/XeFkEaGnk30P96om1217P7/Face-Recognition-Gallery-App?node-id=0%3A1)
* In the gallery, we only show the cropped image found by the face recognizer
* Error handling: 
    - if there is no face, show some nice error message to the user
    - files should only support `.jpg` format with a max file size of `5MB`


#### Notes
* Multiple faces: the app does not need to support multiple faces, in the case where an image with multiple faces are upload, the `/detect` endpoint will return a signle bounding box for the first face it recognizes.