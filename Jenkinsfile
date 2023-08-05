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

    
}