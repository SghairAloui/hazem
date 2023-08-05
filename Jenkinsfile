node {
    stage ('Checkout SCM') {
        bat 'rmdir /s /q C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\CI_Test_angular'
        bat 'git clone https://github.com/SghairAloui/hazem.git'

    }

    stage ('Install node module') {
        bat 'npm install' // Utilisation de la commande "bat" pour exécuter des commandes batch sur Windows
    }

    stage ('Build') {
        bat 'npm run build --prod' // Utilisation de la commande "bat" pour exécuter des commandes batch sur Windows
    }

}
