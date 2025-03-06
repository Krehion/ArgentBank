# ArgentBank Project Setup

## Steps to Run the Project

1. **Open Docker Desktop** and ensure Docker is running.

2. **Start Docker Containers**:

   - Navigate to the root of your project (where your `docker-compose.yml` file is located).
   - Run the following command to build and start your Docker containers:
     ```bash
     docker-compose up --build
     ```
     This will ensure that both the frontend and backend are set up with the latest changes and will build the project from scratch if needed.

3. **Access the Application**:

   - Once the containers are up and running, visit your app in your browser at [http://localhost:3000](http://localhost:3000).

4. **Stop the Docker Containers (if needed)**:
   - To stop the containers gracefully, use:
     ```bash
     docker-compose down
     ```
     This will stop the running containers without deleting them, so you can quickly bring them back up later.
   - Alternatively, you can stop them from Docker Desktop's interface.
