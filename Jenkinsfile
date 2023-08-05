node {
    stage ('Checkout SCM') {
        bat 'git clone https://github.com/SghairAloui/hazem.git'
    }

    stage ('Install node module') {
        bat 'npm install' // Utilisation de la commande "bat" pour exécuter des commandes batch sur Windows
    }

    stage ('Build') {
        bat 'npm run build --prod' // Utilisation de la commande "bat" pour exécuter des commandes batch sur Windows
    }

    stage ('Build docker image'){
        steps {
            bat 'docker build -t moohamedd/jenkins_test_CI:v1 .'
        }
    }

      stage ('Push Docker image'){
        steps {
            bat 'docker push moohamedd/jenkins_test_CI:v1 '
        }
    }
}
