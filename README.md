# D-ID Photo Booth
The D-ID Photo Booth App lets users upload an image (that contains a face), detect the face, and then save the image + bounding box to the gallery.

### Spec

#### Backend
* Should contain a simple storage Database (you can use in-memory storage or local mongo) for saving the user's images with their bounding boxes
* Should contain a file system storage for the image files that will be served to the client
* A nodejs http server with 4 endpoints
    - `GET /images`
    - `POST /images`
* the `POST /images` endpoint accepts an image file, image name, and its bounding box

#### Frontend
* SPA that follows [this figma](https://www.figma.com/file/XeFkEaGnk30P96om1217P7/Face-Recognition-Gallery-App?node-id=0%3A1)
* Use [@tensorflow-models/blazeface](https://www.npmjs.com/package/@tensorflow-models/blazeface) for face detection - see example under `client/detection_example` for how to take an image to run a detection on it
* The "Save" button should be disabled until a name and a photo have been chosen
* Error handling: 
    - if there is no face, show some nice error message to the user
    - files should only support `.jpg` format with a max file size of `5MB`


### Notes
* Multiple faces: the app does not need to support multiple faces, in the case where an image with multiple faces is uploaded,  return a signle bounding box for the first face recognized.


### Bonus Points
* Dockerize your app and DB using docker-compose

### Submission
- Fork this repo 
- Write your code in the fork
- Remove all uneeded files
- send a link with your solution repo to `ore.poran@d-id.com`