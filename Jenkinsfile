pipeline{
  agent any
  stages {
    stage("test") {
      steps {
        echo 'test....'
      }
    } 
    stage("build") {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }  
  }  
}
