node {
    stage ('Checkout SCM') {
        git branch: 'main', url: 'https://github.com/SghairAloui/hazem.git'
    }

    stage ('Install node module') {
        bat "npm install" // Utilisation de la commande "bat" pour exécuter des commandes batch sur Windows
    }

    stage ('Test') {
        bat "npm run test-headless" // Utilisation de la commande "bat" pour exécuter des commandes batch sur Windows
    }

    stage ('Build') {
        bat "npm run build --prod" // Utilisation de la commande "bat" pour exécuter des commandes batch sur Windows
    }
}
