# Interact.sh Wrapper Service

This is a wrapper service for interact.sh, exposing APIs to retrieve the URL of the testing server being used and information about its interactions.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/amaan178/docker-wrapper-services.git
    ```

2. **Install dependencies:**
    - If you're using Node.js:
        ```bash
        npm install
        ```
    - If you're using Python:
        ```bash
        # Assuming you have Python and pip installed
        pip install Flask
        ```

3. **Run the server:**
    - If you're using Node.js:
        ```bash
        node index.js
        ```
    - If you're using Python:
        ```bash
        python app.py
        ```

## Usage

### API Endpoints

1. **GET /api/getURL**
    - Retrieves the URL of the testing server being used for the current session in interact.sh.

2. **GET /api/getInteractions?url=YOUR_INTERACTSH_URL**
    - Retrieves information about interactions on the specified interact.sh URL.
    - Replace `YOUR_INTERACTSH_URL` with the URL obtained from the `/api/getURL` endpoint.

### Example

- To get the URL of the testing server:
    ```bash
    curl http://localhost:3000/api/getURL
    ```

- To get interactions for a specific interact.sh URL:
    ```bash
    curl http://localhost:3000/api/getInteractions?url=YOUR_INTERACTSH_URL
    ```

## Docker

Alternatively, you can run the service using Docker.

1. **Build the Docker image:**
    ```bash
    docker build -t interactsh-wrapper .
    ```

2. **Run the Docker container:**
    ```bash
    docker run -p 3000:3000 interactsh-wrapper
    ```

Now, the service should be running and accessible at http://localhost:3000.

## Notes

- Make sure interactsh-client is installed and available in your PATH for the wrapper service to work properly.
