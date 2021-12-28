# D-ID Photo Booth
The D-ID Photo Booth App lets users upload an image (that contains a face), detect the face, and then save the image to the gallery.

### Spec

#### Backend
* Should contain a simple storage Database (you can use in-memory storage or local mongo) for saving the user's images with their bounding boxes
* Should contain a file system storage for the image files that will be served to the client
* A nodejs http server with 4 endpoints
    - `GET /photos`
    - `POST /photos`
* the `POST /photos` endpoint accepts an image file, image name, and its bounding box

#### Frontend
* SPA that follows [this figma](https://www.figma.com/file/XeFkEaGnk30P96om1217P7/Face-Recognition-Gallery-App?node-id=0%3A1)
* In the gallery, we only show the cropped image found by the backend
* The "Save" button should be disabled until a name and a photo have been chosen
* Error handling: 
    - if there is no face, show some nice error message to the user
    - files should only support `.jpg` format with a max file size of `5MB`


### Notes
* Multiple faces: the app does not need to support multiple faces, in the case where an image with multiple faces are upload, the `/detect` endpoint will return a signle bounding box for the first face it recognizes.


### Bonus Points
* Use mongodb as your DB and put your server + db in a docker-compose file

### Submission
- Fork this repo 
- Remove all uneeded files
- send your solution to `ore.poran@d-id.com`