node {

       environment {
        DOCKER_HUB_USERNAME = credentials('moohamedd')
        DOCKER_HUB_PASSWORD = credentials('Sghair123@+')
    }
    stage ('Checkout SCM'){
        git branch : 'main', url:'https://github.com/SghairAloui/hazem.git'
    }

    stage ('Install node module'){
        bat "npm install"
    }


     stage ('Build'){
        bat "npm run build --prod"
    }

    stage ('Build docker image'){
        bat "docker build -t moohamedd/jenkins_test_ci:v1 ."
    }

    stage ('Push docker image'){
        bat "docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD"

        bat "docker push moohamedd/jenkins_test_ci:v1"
    }

    
}