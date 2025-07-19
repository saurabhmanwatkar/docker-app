pipeline {
    agent any
    
    environment {
        IMAGE_NAME = 'docker-pipeline'
        DOCKER_CRED = credentials('dockerhub-creds')
    }

    stages {
        stage('Git Checkout') {
            steps {
                // Checkout the Dockerfile and any other necessary files from your repository
                git branch: 'master', credentialsId: '', url: 'https://github.com/Shahid199578/docker-app.git'
            }
        }
        stage('Build docker image') {
            steps {        
                // Build the Docker image
                sh "docker build -t shahid199578/docker-pipeline:latest ."
                }
        }
        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub using the provided credentials
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable:'USERNAME', passwordVariable: 'PASSWORD')])
                    {
                        sh '''
                        echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                        docker push shahid199578/docker-pipeline:latest
                        '''
                    }
                    }
                }
            }
    }
}
