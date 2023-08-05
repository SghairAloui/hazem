node {

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
        bat "docker login -u moohamedd -p Sghair123@+"

        bat "docker push moohamedd/jenkins_test_ci:v1"
    }

    
}