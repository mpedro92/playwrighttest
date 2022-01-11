pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'node16', configId: '<config-file-provider-id>') {
                    sh '''
                        npm install
                        npm run test
                    '''
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}